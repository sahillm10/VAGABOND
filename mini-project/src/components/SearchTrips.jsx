import React, { Component, useState, useEffect } from "react";
import "./TripStyles.css";
import "./SearchStyles.css";
import TripData from "./TripData";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SearchTrips extends Component {
  constructor({ setSearchCallback }) {
    super();
    this.setSearchCallback = setSearchCallback;
    this.state = {
      trips: [],
    };
  }

  handleSearch = (dest) => {
    console.log("Searching for: ", dest);
    const that = this;
    if (dest === "") {
      this.setSearchCallback(false);
      this.setState({ ...this.state, trips: [] });
    } else {
      this.setSearchCallback(true);
      axios
        .post("http://localhost:3001/search-service", { dest })
        .then(function (response) {
          that.setState({ ...that.state, trips: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const dest = data.get("Destination");

    this.handleSearch(dest);
  };
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 2.25,
      slidesToScroll: 1,
    };
    let allTrips = this.state.trips;
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h2>Destination:</h2>
              <input
                type="text"
                name="Destination"
                onInput={(event) => {
                  this.handleSearch(event.target.value);
                }}
              />
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="tripcard">
          <Slider {...settings}>
            {allTrips.map((trip) => {
              return (
                <TripData
                  image={trip.imageURL}
                  heading={trip.heading}
                  text={trip.text}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SearchTrips;
