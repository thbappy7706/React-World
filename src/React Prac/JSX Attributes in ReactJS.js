import React from 'react';
import ReactDOM from 'react-dom';

const name = "Tanvir Hossen Bappy";
const img = "https://picsum.photos/250/300";
const website = "https://th-bappy.github.io";



ReactDOM.render(
    <>
       <h1>The Name of the Developer is {name}</h1>
       <img src = {img} alt= "randomImages"/>
       <a href= {website} target="_bappy" />

    </>,



document.getElementById("root")
);
 