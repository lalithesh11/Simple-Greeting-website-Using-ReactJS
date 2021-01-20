

import React from "react";
import ReactDOM from "react-dom";
import './index.css';

var currDate=new Date();
// var currDate=new Date(2020,16,24,22); // for testing
let currHrs=currDate.getHours();
let greeting="";
let headingColor={
    color: " ",
}; // or headingColor={};

if (currHrs>=1 && currHrs<12){
    greeting="Good Morning!";
    headingColor.color="Green";
}
else if (currHrs>=12 && currHrs<18){
    greeting="Good Afternoon!";
    headingColor.color="Orange";
}
else{
    greeting="Good Evevning!";
    headingColor.color="Black";
}

ReactDOM.render(
    <>
    <div>
    <h1> Hello Sir,<span style={headingColor}>{greeting}</span> </h1>
    </div>
    </>, document.getElementById('root'));
    
