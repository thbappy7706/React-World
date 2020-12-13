import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


const heading = {
    color: "blue",
    textTransform:"capitalize",
    textAlign: "center",    
}

const img_div = {
    display: "flex",
    justifyContent:"center",
}


const name = "Tanvir Hossen Bappy";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/350/300";
 
//   <h1 contentEditable="true" >The Name of the Developer is {name}</h1>



ReactDOM.render(
    <>
       <h1 style={heading}>The Name of the User Is {name}</h1>
       
 

       <div  style = {img_div} >

       <img src = {img1} alt= "randomImages"/>
       <img src = {img2} alt= "randomImages"/>
       <img src = {img3} alt= "randomImages"/>

       </div>

    </>,



document.getElementById("root")
);