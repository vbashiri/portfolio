import React, { useState } from "react";
import Icon from "./Icon";
import MediaModal from "./MediaModal";
import { usePageLoaded } from "../hooks";

// Masonry grid of screenshots; clicking one opens it in the lightbox.
export default function Gallery({ images, title }) {
  const [open, setOpen] = useState(null);
  const pageLoaded = usePageLoaded();
  if (!images.length) return null;

  const media = images.map((src) => ({ type: "image", src }));

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button key={src} className="gallery__item" onClick={() => setOpen(i)} aria-label={`Open screenshot ${i + 1}`}>
            <img
              src={pageLoaded ? src : undefined}
              alt={`${title} screenshot ${i + 1}`}
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
            <span className="gallery__zoom" aria-hidden="true">
              <Icon name="expand" size={18} />
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <MediaModal media={media} title={title} startIndex={open} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
