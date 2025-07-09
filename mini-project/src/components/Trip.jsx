import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./TripStyles.css";
import TripData from "./TripData";
import Santorini from "../assets/Santorini.jpg";
import Kyoto from "../assets/Kyoto.jpg";
import Maui from "../assets/Maui.jpg";
import MachuPicchu from "../assets/MachuPicchu.jpg";
import Dubrovnik from "../assets/Dubrovnik.jpg";
import BoraBora from "../assets/BoraBora.jpg";
import Reykjavik from "../assets/Reykjavik.jpg";
import SearchTrips from "./SearchTrips";

class Trip extends Component {
  constructor() {
    super();
    this.state = {
      trips: [],
      searched: false,
    };
  }
  componentDidMount = () => {
    let copiedStates = Object.assign({}, this.state);
    let that = this;
    axios
      .get("http://localhost:3001/service")
      .then(function (response) {
        copiedStates.trips = response.data;
        that.setState(copiedStates);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2.25,
      slidesToScroll: 1,
    };

    let allTrips = this.state.trips;

    return (
      <div className="trip">
        <h1>Featured Trips and Exclusive Offers!</h1>
        <p>Explore Unbeatable Deals on Your Next Adventure!</p>
        <br></br>
        <SearchTrips
          setSearchCallback={(newState) => {
            this.setState({ ...this.state, searched: newState });
          }}
        />
        {this.state.searched ? (
          <></>
        ) : (
          <div className="tripcard">
            <Slider {...settings}>
              {allTrips.map((trip) => {
                return (
                  <>
                    <TripData
                      image={trip.imageURL}
                      heading={trip.heading}
                      text={trip.text}
                    />
                  </>
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    );
  }
}

export default Trip;
