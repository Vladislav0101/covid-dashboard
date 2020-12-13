import React, { useState, useEffect, Component } from "react";

// function Test() {
//   const [data, setData] = useState({ hits: [] });

//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(
//           "https://hn.algolia.com/api/v1/search?query=redux"
//         );

//         const result = await response.json();
// console.log(result);
//        setData(result.data);
//       };

//       fetchData();
      
//     }, []);

//   return (
//     <ul>
//       {data.hits.map((item) => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
 
class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then((response) => response.json())
      .then((data) => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;

    return (
      <ul>
        {hits.map((hit) => (
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Test;