import React, { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

// Fullscreen-ish dialog with a media stage (YouTube + images), thumbnails and
// optional side content. Closes on Escape / backdrop click, arrows navigate.
export default function MediaModal({ media, title, onClose, children, startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef(null);
  const count = media.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && count > 1) go(1);
      if (e.key === "ArrowLeft" && count > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus && previousFocus.focus && previousFocus.focus();
    };
  }, [onClose, go, count]);

  const current = media[index];

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className={`modal__panel ${children ? "" : "modal__panel--media-only"}`} onMouseDown={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={22} />
        </button>

        {count > 0 && (
          <div className="modal__media">
            <div className="modal__stage">
              {current.type === "youtube" ? (
                <iframe
                  key={current.id}
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?rel=0`}
                  title={`${title} gameplay video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img key={current.src} src={current.src} alt={`${title} screenshot ${index + 1}`} />
              )}

              {count > 1 && (
                <>
                  <button className="modal__nav modal__nav--prev" onClick={() => go(-1)} aria-label="Previous">
                    <Icon name="left" size={26} />
                  </button>
                  <button className="modal__nav modal__nav--next" onClick={() => go(1)} aria-label="Next">
                    <Icon name="right" size={26} />
                  </button>
                </>
              )}
            </div>

            {count > 1 && (
              <div className="modal__thumbs">
                {media.map((m, i) => (
                  <button
                    key={i}
                    className={`modal__thumb ${i === index ? "is-active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={m.type === "youtube" ? "Video" : `Screenshot ${i + 1}`}
                  >
                    {m.type === "youtube" ? (
                      <>
                        <img src={`https://i.ytimg.com/vi/${m.id}/mqdefault.jpg`} alt="" />
                        <span className="modal__thumb-play"><Icon name="play" size={16} /></span>
                      </>
                    ) : (
                      <img src={m.src} alt="" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {children && <div className="modal__info">{children}</div>}
      </div>
    </div>
  );
}
