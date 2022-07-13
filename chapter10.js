//import * as Mathematik from './chapter4.js';
"use strict"

//obsolete type of module with no dependency
const weekDay = function(){
    const names = ["sunday", "monday","Tuesday","wednesday","thursday","friday","saturday"];
    return {
        name(number){return names[number];},
        number(name){return names.indexOf(name);}
    }
}();
// console.log(weekDay.name(3));
// console.log(weekDay.number("wednesday"));
// console.log(weekDay.number(weekDay.name(3)));
/*
CommonJS
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format){
    return format.replace(/YYYY|M(MMM)?|DO?|dddd/g, tag => {
        if(tag == "YYYY") return date.getFullYear();
        if(tag == "M") return date.getMonth();
        if(tag == "MMM") return months[date.getMonth()];
        if(tag == "DO") return ordinal(date.getDate());
        if(tag == "dddd") return days[date.getDay()];
    });
}

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2017,9,13),"dddd the Do"));
*/

//let try to geolocalize a site
let x = document.getElementById("demo");

/*
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    x.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
}
*/
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }
