import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
  return (
    <div>
        {dogs.map(d => (
          <div className="col-3 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
    </div>
  );
}

export default DogList;
