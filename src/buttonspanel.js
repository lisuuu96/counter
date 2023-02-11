import React from 'react';
import './buttonspanel.css';

function Buttonspanel (props) {
    return (
        <div className="buttons-panel">
            <button onClick={() => {props.buttonMethod('add')}}>Add 1</button>
            <button onClick={() => {props.buttonMethod('reinit')}}>Reinit</button>
            <button onClick={() => {props.buttonMethod('reset')}}>Reset</button>
        </div>
    );
}
export default Buttonspanel;