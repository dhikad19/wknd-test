import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Stay active with a little workout.", "Stay fit with healty food.", "Stay safe and take care."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="center">
        <div className="img-container">
          <img className="lego-bg" src="assets/lego.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>WEEKEND FROM HOME</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <div className="btn-container">
          <a href="#works">
            <button> let's Go </button>
          </a>
        </div>
      </div>
    </div>
  );
}
