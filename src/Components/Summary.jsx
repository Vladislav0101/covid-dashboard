import React, { useState, useEffect, Component } from "react";

const API = 'https://api.covid19api.com/summary';
// const API = "https://hn.algolia.com/api/v1/search?query=";
// const DEFAULT_QUERY = "redux";

class Summary extends Component {
   constructor(props) {
    super(props);
 
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => this.setState({ countries: data.Countries }));
  }

  render() {
    const { countries } = this.state;
 
    return (
      <ul>
        {countries.map((hit) => (
          <li key={hit.CountryCode}>
            <p>{hit.Country}</p>
          </li>
        ))}
      </ul>
    );
};
};
export default Summary;