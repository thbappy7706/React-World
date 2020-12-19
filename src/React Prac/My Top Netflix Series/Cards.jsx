import React from 'react';
function Card(props) {
    console.log(props)
      return (
        <>
          <div className="cards">
            <div className="card">
              <img src={props.imgsrc} width="400" height="320" alt="myPic"className="card_img"/>
              <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.seriesname}</h3>
                <a href={props.link} target="_blank">
                  <button className="btn">Watch Now</button>
            
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }

    export default Card;