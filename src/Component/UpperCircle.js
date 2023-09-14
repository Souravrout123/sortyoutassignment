import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faLaptop,
  faSearch,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import "../Component/CSS/UpperCircle.css"; // Import a CSS file for styling

function UpperCircle() {
  const [circles, setCircles] = useState([
    {
      icon: faCog,
      backgroundColor: "gray",
      textColor: "black",
    },
    {
      icon: faCommentDots,
      backgroundColor: "gray",
      textColor: "black",
    },
    {
      icon: faSearch,
      backgroundColor: "gray",
      textColor: "black",
    },
    {
      icon: faLaptop,
      backgroundColor: "gray",
      textColor: "black",
    },
  ]);

  const handleCircleClick = (index) => {
    const updatedCircles = [...circles];
    updatedCircles[index].backgroundColor =
      updatedCircles[index].backgroundColor === "gray" ? "#00a67e" : "gray";
    updatedCircles[index].textColor =
      updatedCircles[index].textColor === "black" ? "white" : "black";
    setCircles(updatedCircles);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {circles.map((circle, index) => (
          <div
            key={index}
            className="circle"
            style={{
              backgroundColor: circle.backgroundColor,
              color: circle.textColor,
            }}
            onClick={() => handleCircleClick(index)}
          >
            <FontAwesomeIcon
              icon={circle.icon}
              style={{
                fontSize: "24px",
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="text">
          <h1>Reshearch</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>
        <div className="text">
          <h1>Fully Costomizable</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>
        <div className="text">
          <h1>Coordination</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>
        <div className="text">
          <h1>Test</h1>
          <p>
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. 02-Nov-2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpperCircle;
