import React, { useState, useEffect, Component } from "react";
import { ShowTotalCases } from "./ShowTotalCases";

const API = "https://api.covid19api.com/summary";
// const API = "https://hn.algolia.com/api/v1/search?query=";
// const DEFAULT_QUERY = "redux";

// class Summary extends Component {
function Summary() {
  const [data, setData] = useState({ countries: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const result = await response.json();
      console.log(result);
      setData({ countries: result.Countries });
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.countries.map((country) => (
        <li key={country.CountryCode} onClick={() => ShowTotalCases(country)}>
          <p>{country.Country}</p>
        </li>
      ))}
    </ul>
  );
}

export default Summary;