import { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import videofile from "../assets/video/reel.mp4";
import { Link } from "react-router-dom";

export default function Home() {
  const mainVideoRef = useRef(null);
  const overlayVideoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // keep the last known playback time + whether we should resume after switching
  const savedTimeRef = useRef(0);
  const shouldAutoplayOverlayRef = useRef(false);
  const shouldResumeMainRef = useRef(false);

  const getActiveVideo = () =>
    isFullscreen ? overlayVideoRef.current : mainVideoRef.current;

  const togglePlay = () => {
    const v = getActiveVideo();
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
    else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const openFullscreen = () => {
    const v = mainVideoRef.current;
    if (!v) return;

    // capture current state/time from inline video
    savedTimeRef.current = v.currentTime;
    shouldAutoplayOverlayRef.current = !v.paused && !v.ended;

    v.pause();
    setIsPlaying(false);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    const ov = overlayVideoRef.current;

    // capture the overlay's current state/time before closing
    const overlayWasPlaying = ov && !ov.paused && !ov.ended;
    const t = ov ? ov.currentTime : savedTimeRef.current;

    if (ov) ov.pause();
    savedTimeRef.current = t;
    shouldResumeMainRef.current = overlayWasPlaying;

    setIsFullscreen(false);
  };

  // When overlay mounts, sync time and optionally autoplay
  useEffect(() => {
    if (!isFullscreen) return;

    const ov = overlayVideoRef.current;
    if (!ov) return;

    const syncThenMaybePlay = () => {
      try {
        ov.currentTime = savedTimeRef.current || 0;
      } catch (_) {}
      if (shouldAutoplayOverlayRef.current) {
        ov.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      else {
        setIsPlaying(false);
      }
    };

    if (ov.readyState >= 1) {
      // HAVE_METADATA
      syncThenMaybePlay();
    }
    else {
      const onLoaded = () => {
        ov.removeEventListener("loadedmetadata", onLoaded);
        syncThenMaybePlay();
      };
      ov.addEventListener("loadedmetadata", onLoaded);
    }
  }, [isFullscreen]);

  // After overlay closes, restore time to the inline video and optionally resume
  useEffect(() => {
    if (isFullscreen) return;

    const v = mainVideoRef.current;
    if (!v) return;

    try {
      v.currentTime = savedTimeRef.current || 0;
    } catch (_) {}

    if (shouldResumeMainRef.current) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
    else {
      setIsPlaying(false);
    }
  }, [isFullscreen]);

  // Disable background scroll and allow Esc to close while fullscreen
  useEffect(() => {
    if (isFullscreen) {
      const onKey = (e) => {
        if (e.key === "Escape") closeFullscreen();
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [isFullscreen]);

  return (
    <section id="Main">
      <div className="headingBox">
        <div className="topHeading">WE CRAFT</div>
        <p className="topPera">Story, Not Just Content</p>
      </div>

      <div className="main__row">
        {/* LEFT: Video */}
        <div className="main__col">
          <p className="main__col-pera reelText">Watch Reel</p>
          <div className="video-container">
            <video
              ref={mainVideoRef}
              src={videofile}
              playsInline
              loop
              onClick={togglePlay}
            />
            {!isPlaying && !isFullscreen && (
              <button
                className="play-button"
                onClick={togglePlay}
                aria-label="Play reel video"
              >
                ▶
              </button>
            )}
            <button
              className="resize-button"
              onClick={openFullscreen}
              aria-label="Expand video"
            >
              ⤢
            </button>
          </div>
        </div>

        {/* RIGHT: Copy */}
        <div className="main__col">
          <div className="main__col-color-pera">CodeLit</div>
          <h1 className="main__col-heading">
            THINKING BOLDLY.
            <br /> CRAFTING VISUALLY
          </h1>
          <p className="main__col-pera">
            Not just makers. Campaign creators. Visual disruptors.
          </p>
          <Link to="/work" className="Explore_btn">
            Explore All Works
          </Link>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div
          className="fullscreen-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeFullscreen();
          }}
        >
          <button
            className="close-button"
            onClick={closeFullscreen}
            aria-label="Close video"
          >
            ✕
          </button>
          <video
            ref={overlayVideoRef}
            src={videofile}
            loop
            controls
            playsInline
            className="fullscreen-video"
          />
        </div>
      )}
    </section>
  );
}
