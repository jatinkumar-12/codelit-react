import { useRef, useState } from "react";
import "../styles/Home.css";
import videofile from "../assets/video/reel.mp4";

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // hide button
    }
  };

  const handlePause = () => {
    setIsPlaying(false); // show button again
  };
  return (
    <>
      <section id="Main">
        <div className="headingBox">
          <div className="topHeading">WE CRAFT</div>
          <p className="topPera">Story, Not Just Content</p>
        </div>
        <div className="main__row">
          <div className="main__col">
            <p className="main__col-pera reelText">Watch Reel</p>
            <div className="video-container">
              <video
                ref={videoRef}
                src={videofile}
                playsInline
                loop
                onPause={handlePause} // show button again if paused
              />

              {!isPlaying && (
                <button className="play-button" onClick={handlePlay}>
                  ▶
                </button>
              )}
            </div>
          </div>
          <div className="main__col">
            <div className="main__col-color-pera">CodeLit</div>
            <h1 className="main__col-heading">
              THINKING BOLDLY.
              <br /> CRAFTING VISUALLY
            </h1>
            <p className="main__col-pera">
              Not just makers. Campaign creators. Visual disruptors.
            </p>
            <button className="Explore_btn">Explore All Works</button>
          </div>
        </div>
      </section>
    </>
  );
}
