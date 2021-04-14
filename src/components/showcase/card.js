import React from 'react';
import github from "../../common/images/github.png";

function Card(props) {
    var im = require('../../common/images/github.png');
    return (
        <div className="card1">
            <a id={props.id} href="#">
                <div className="card-box">
                    <img src={github} />
                    <div className="card-title1">{props.title}</div>
                    <div className="card-body1">{props.brief}</div>
                </div>
            </a>
        </div>
    )
}

export default Card
