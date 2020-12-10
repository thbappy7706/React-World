import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


ReactDOM.render(

    <>

    <h1>
          Todays Current Date is = {currDate}

    </h1>

<h2> Todays Current Time is = {currTime}</h2>
    </>,

    document.getElementById("root")



);
