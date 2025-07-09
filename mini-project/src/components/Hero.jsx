import "./HeroStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import TravelImage from "../assets/Travel2.jpg";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.btnText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
