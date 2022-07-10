import React from "react";
import "../App.css";
import pic1 from "../images/10 bg.png";

function Hero() {
  return (
    <div>
      <div className="hero bg-dark">
        <div className="hero-txt">
          <div className="txt1">
            <h1 className="fs-1 fw-bold text-light">Hi there, </h1> <br />
            <h1 className="fs-1 fw-bold text-light">
              i'm <span className="text-light">Abdullahi Tahliil</span>
            </h1>
            <br />
          </div>
          <div className="txt2">
            <p className="fs-5 text-light">
              i am <span className="text-danger">web developer</span>{" "}
            </p>{" "}
            <br />
            <button type="button" className="btn btn-primary btn-lg ">
              About me
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img
            className="class="
            position-absolute
            top-0
            start-100
            translate-middle
            src={pic1}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
