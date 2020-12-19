import React from 'react';
function Card(props) {
    console.log(props)
      return (
        <>
          <div className="cards">
            <div className="card">
              <img src={props.imgsrc} width="400" height="320" alt="myPic"className="cardImg"/>
              <div className="cardInfo">
                <span className="cardCategory">{props.title}</span>
                <h3 className="cardTitle">{props.seriesname}</h3>
                <a href={props.link} target="_blank">
                  <button>Watch Now</button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }

    export default Card;