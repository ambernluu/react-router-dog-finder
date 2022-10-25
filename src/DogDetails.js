import React from "react";
import { Link, Redirect } from "react-router-dom";
//import "./DogDetails.css";

function DogDetails({dog}) {

  if (!dog) return <Redirect to="/dogs"/>

  return (
    <div>
      <div>
        <img src={dog.src} alt="" />
        <h2>Name: {dog.name}</h2>
        <h3>Age: {dog.age}</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;
