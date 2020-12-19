import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import "./index.css";
import Seriesdata from "./Seriesdata";

// map defined
// function ncard(value,index number,array with play )
function ncard(val)
{
  return (
     <Card
     imgsrc= {val.imgsrc}
     seriesname= {val.seriesname}
     title= {val.title}
     link= {val.link}
     />
  );
}
ReactDOM.render(
    <>

    <h1 className="heading_style">Top Netflix Series Of All The Time</h1>
     
     {Seriesdata.map(ncard)}



    {/* {Seriesdata.map((val) => {
         return(
          <Card
          imgsrc= {val.imgsrc}
          seriesname= {val.seriesname}
          title= {val.title}
          link= {val.link}
          />
         );
         
    })}; */}


{/* <Card
     imgsrc= {Seriesdata[1].imgsrc}
     seriesname= {Seriesdata[1].seriesname}
     title= {Seriesdata[1].title}
     link= {Seriesdata[1].link}
/> */}




 
    </>,
    
    document.getElementById("root")
    );






    //     differnent between fatArrow and Function


/*
function myName(a,b)
{
     return a+b;
}


//fat arrow
const myName = (a,b) => a+b;

*/