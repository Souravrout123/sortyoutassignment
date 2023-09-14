import React, { useState } from "react";
import "../Component/CSS/CircleComponent.css" 

function CircleComponent() {
  const [circleColors, setCircleColors] = useState([
    "gray",
    "gray",
    "gray",
    "gray",
  ]);

  const handleCircleClick = (index) => {
    const newColors = [...circleColors];
    newColors[index] = newColors[index] === "gray" ? "#00a67e" : "gray";
    setCircleColors(newColors);
  };

  return (
    <div className="circle-component">
      <div className="circle-container">
        {circleColors.map((color, index) => (
          <div
            key={index}
            className="circle"
            style={{ backgroundColor: color }}
            onClick={() => handleCircleClick(index)}
          ></div>
        ))}
      </div>
      <div className="text-container">
        <div className="text">
          <h1>Dexter Gilbert</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>

        <div className="text">
          <h1>Mary Collier</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>

        <div className="text">
          <h1>Stefan Morrison</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>

        <div className="text">
          <h1>Bill Smith</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default CircleComponent;

