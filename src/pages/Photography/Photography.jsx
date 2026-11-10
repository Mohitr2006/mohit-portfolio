
import { useEffect, useRef, useState } from "react";
import SpecularButton from "../../components/SpecularButton/SpecularButton";
import "./Photography.css";

const photos = Array.from({ length: 10 }, (_, index) => ({
  src:
    index === 0
      ? "/images/photo1.png"
      : `/images/photo${index + 1}.jpg`,
  alt: `Photography ${index + 1}`,
}));
function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeTimer = useRef(null);
  const closingRef = useRef(false);

  const openPhoto = (photo) => {
    window.clearTimeout(closeTimer.current);
    closingRef.current = false;
    setIsClosing(false);
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    if (closingRef.current || !selectedPhoto) return;

    closingRef.current = true;
    setIsClosing(true);

    closeTimer.current = window.setTimeout(() => {
      setSelectedPhoto(null);
      setIsClosing(false);
      closingRef.current = false;
    }, 350);
  };

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePhoto();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimer.current);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="photography-page">

      {/* HERO SECTION */}

      <div className="photography-hero">
        <span className="photography-label">PHOTOGRAPHY</span>

        <h1>Capturing Moments Through My Lens</h1>

        <p>
          Photography allows me to see the beauty in everyday life.
          Here are some of my favourite moments.
        </p>

        <SpecularButton
          size="lg"
          radius={18}
          tint="#C13584"
          tintOpacity={1}
          textColor="#ffffff"
          lineColor="#FCAF45"
          baseColor="#833AB4"
          intensity={1}
          idleIntensity={0.35}
          shineSize={10}
          shineFade={34}
          thickness={1.2}
          glow={1}
          followMouse
          proximity={250}
          onClick={() =>
            window.open(
              "https://www.instagram.com/rishii.clicks_/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <span className="instagram-button-content">
            <svg
              className="instagram-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1.2"
                fill="currentColor"
              />
            </svg>

            @rishii.clicks_
          </span>
        </SpecularButton>
      </div>

      {/* PHOTO GALLERY */}

      <div className="photography-gallery">
        {photos.map((photo) => (
          <button
            className="photo-item"
            key={photo.src}
            type="button"
            onClick={() => openPhoto(photo)}
            aria-label={`View full image: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />

            <div className="photo-hover-overlay">
              <span>View Full Image</span>
            </div>
          </button>
        ))}
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}

      {selectedPhoto && (
        <div
          className={`photo-lightbox ${
            isClosing ? "lightbox-closing" : ""
          }`}
          onClick={closePhoto}
          role="presentation"
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closePhoto();
            }}
            aria-label="Close image"
          >
            <span className="close-line close-line-one" />
            <span className="close-line close-line-two" />
          </button>

          <img
            className="lightbox-image"
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Photography;
