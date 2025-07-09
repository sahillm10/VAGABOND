import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./TravelDiary.css";
import "./SearchStyles.css";

class SearchDiary extends Component {
  constructor({ setSearchCallback }) {
    super();
    this.setSearchCallback = setSearchCallback;
    this.state = {
      travels: [],
    };
  }

  handleSearch = (place) => {
    console.log("Searching for: ", place);
    const that = this;
    if (place === "") {
      this.setSearchCallback(false);
      this.setState({ ...this.state, travels: [] });
    } else {
      this.setSearchCallback(true);
      axios
        .post("http://localhost:3001/search-diary", { place })
        .then(function (response) {
          // copiedStates.travels = response.data;
          // console.log(copiedStates);
          // that.setState(copiedStates);
          that.setState({ ...that.state, travels: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // let copiedStates = Object.assign({}, this.state);
    // console.log("Copied:" + copiedStates);
    // let that = this;
    const data = new FormData(e.currentTarget);
    const place = data.get("Place");
    console.log(place);

    this.handleSearch(place);
  };
  render() {
    let allTravels = this.state.travels;
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h2>Destination:</h2>
              <input
                type="text"
                name="Place"
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

        <div className="traveldiary">
          {allTravels.map((travel) => {
            return (
              <>
                <h1>{travel.Destination}</h1>
                <p>
                  <b>Date of Travel: </b>
                  {travel.Date}
                </p>
                <p>
                  <b>Travel Companions: </b>
                  {travel.Companions}
                </p>

                <p>
                  <b>Experience: </b>
                  {travel.Experience}
                </p>

                <p>
                  <b>Review: </b>
                  {travel.Review}
                </p>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchDiary;
