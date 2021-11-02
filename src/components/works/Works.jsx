import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Blue Kikcs",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Angelus",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "SoYo",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="img-container">
        <img className="lego-bg" src="assets/lego.png" alt="" />
      </div>
      <div className="text-container">
        <p>
          <span className="text-title">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability,
      or performance to exhaust (something, such as a mine) by working to devise, arrange,
      or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
      <br />
          <br />
          <span className="text-bottom">-weekend team</span>
        </p>
        <h1 className="testi-text">Testimonial</h1>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
