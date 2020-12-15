import { useState, useEffect, useCallback } from "react";
import { Header } from "./Components/Header";
import { Summary } from "./Components/Summary";
import { MapBox } from "./Components/MapBox";
import { ShowTotalCases } from "./Components/ShowTotalCases";
import { Chart } from "./Components/Chart";
// import Test from "./Components/Test";

const API = "https://api.covid19api.com/summary";

function App() {
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

    const [currentCountry, setCurrentCountry] = useState(null);

    const setCountry = useCallback((currentCountry) => {
        setCurrentCountry(currentCountry);
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <main className="main">
                <div className="list-box">
                    <Summary
                        countries={data.countries}
                        setCountry={setCountry}
                    />
                </div>
                <MapBox></MapBox>
                <div className="table-box">
                    {currentCountry && (
                        <ShowTotalCases
                            currentCountryTotalConfirmed={
                                currentCountry.TotalConfirmed
                            }
                        ></ShowTotalCases>
                    )}
                </div>
                <Chart></Chart>
            </main>
        </div>
    );
}

export default App;
