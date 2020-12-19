import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from './Calc'


ReactDOM.render(
    <>
    <ul>
        <li>The Result of the addition is = {add(40,5)}</li>
        <li>The Result of the subtraction is = {sub(40,5)}</li>
        <li>The Result of the Multiplication is = {mul(40,5)}</li>
        <li>The Result of the Division is = {div(40,5)}</li>

    </ul>
    </>,
    document.getElementById("root")
);

