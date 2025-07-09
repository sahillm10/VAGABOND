import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./TravelDiary.css";
import SearchDiary from "./SearchDiary";

class TravelDiaryData extends Component {
  constructor() {
    super();
    this.state = {
      travels: [],
      searched: false,
    };
  }
  componentDidMount = () => {
    let copiedStates = Object.assign({}, this.state);
    let that = this;
    axios
      .get("http://localhost:3001/travel-diary")
      .then(function (response) {
        copiedStates.travels = response.data;
        that.setState(copiedStates);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    let allTravels = this.state.travels;
    return (
      <div className="traveldiary">
        <SearchDiary
          setSearchCallback={(newState) => {
            this.setState({ ...this.state, searched: newState });
          }}
        ></SearchDiary>
        {this.state.searched ? (
          <></>
        ) : (
          allTravels.map((travel) => {
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
          })
        )}
      </div>
    );
  }
}

export default TravelDiaryData;
