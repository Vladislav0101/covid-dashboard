import React from "react";

export const ShowTotalCases = (props) => {
    return (
        <div className="table-box">
            <div className="total-cases">
                <p>Total Cases</p>
                <p>{props.currentCountryTotalConfirmed}</p>
            </div>
        </div>
    );
};
