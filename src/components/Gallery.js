import React, { useState } from "react";
import Icon from "./Icon";

// Inline media viewer: a large stage (YouTube or image) with a thumbnail strip.
export default function Gallery({ media, title }) {
  const [index, setIndex] = useState(0);
  const count = media.length;
  if (!count) return null;

  const current = media[index];
  const go = (step) => setIndex((i) => (i + step + count) % count);

  return (
    <div className="gallery">
      <div className="gallery__stage">
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
        <div className="gallery__thumbs">
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
                  <span className="modal__thumb-play">
                    <Icon name="play" size={16} />
                  </span>
                </>
              ) : (
                <img src={m.src} alt="" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
