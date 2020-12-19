import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import "./index.css";

ReactDOM.render(
    <>
     <Card
     imgsrc="https://i.pinimg.com/originals/24/fc/70/24fc7066a09fc11ffc421131f2c07d54.jpg"
     seriesname="DARK"
     title="A Netflix Original Series"
     link= "https://www.netflix.com/bd/title/80100172"
     />

 <Card
     imgsrc="https://wallpaperaccess.com/full/1695677.jpg"
     seriesname="DareDevil"
     title="A Netflix Original Series"
     link= "https://www.netflix.com/bd/title/80018294"
     />
 
    </>,
    
    document.getElementById("root")
    );
