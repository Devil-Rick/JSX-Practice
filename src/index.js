//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const YOURNAME = "Saptarshi";
const LName = "Dhibar";
const time = new Date().getDate();
const CURRENTYEAR = new Date().getFullYear(); //this method is used to get the current year

ReactDOM.render(
  <div>
    <p>
      Created by
      {/* first method of concatination */}
      {YOURNAME} {LName}
    </p>
    <p>
      Copyright
      {/* alternative method of concatination */}
      {/* funcitons are not valid as react child */}
      {" " + CURRENTYEAR + " " + time}
    </p>
  </div>,
  document.getElementById("root")
);
