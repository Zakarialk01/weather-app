import React from "react";
import "./App.css";
const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getweather} className="searchbox">
        <input
          type="text"
          name="city"
          placeholder="Tap a city"
          className="searchbox-bar"
        />
        <input
          type="text"
          name="country"
          placeholder="Tap a country"
          className="searchbox-bar"
        />
        <button className="searchbox-box">Submit</button>
      </form>
    </div>
  );
};

export default Form;
