import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="left">
          <div className="text">
            <h2>Aгропромышленный холдинг «Залесье»</h2>
            <span>
              Одно из крупнейших сельхозпредприятие Калининградской области с
              полностью автономной структурой замкнутого цикла – от поля до
              прилавка.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="video">
            {/* <ReactPlayer
              width="100%"
              height="100%"
              url="/videos/Hero Video.mp4"
              playing={true}
            /> */}
            <div className="play-icon">
              {/* <img src="/images/playIcon.svg" alt="Play Icon" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </div>
          </div>
          <div className="about">
            <span>О нас</span>
            <Link to="#">
              <div className="line-icon">
                <i class="fa-solid fa-grip-lines"></i>
              </div>
              <span>УЗНАТЬ БОЛЬШЕ</span>
              <div className="arrow-icon">
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
