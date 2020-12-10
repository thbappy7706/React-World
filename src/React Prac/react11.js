//ES6 Template Literals in JSX in ReactJS

// Backtick sign=  ``

import React from 'react';
import ReactDOM from 'react-dom';

var fName = "Tanvir Hossen"; 
var lName = "Bappy";
 ReactDOM.render(
     <>

<h1>

{`My First Name is ${fName} and Last name is ${lName}`}

       </h1>
</>,

document.getElementById("root")



 );