import React from "react";

const ResultsBar = ({ pages }) => {
  console.log(pages);

  if ("page" in pages) {
    return (
      <div className="results-bar">
        <p>
          <small>Number of results: {pages.total_results}</small>
        </p>
      </div>
    );
  }
  return "";
};

export default ResultsBar;
