import React from "react";
import "./Populate.css";

function Populate(props) {
  function createResult(item, idx) {
    return (
      <li key={idx} className="listItem">
        {<h2> {item.volumeInfo.title} </h2>}
        {` `}
        {item.volumeInfo.authors}
        {` Rating: `}
        {item.volumeInfo.averageRating}
        {<hr />}
      </li>
    );
  }

  function handleResults() {
    console.log(props.info);
    if (props.info.length > 1) {
      let results = props.info.map((item, idx) => createResult(item, idx));
      return results;
    }
  }

  return <ul> {handleResults()}</ul>;
}

export default Populate;
