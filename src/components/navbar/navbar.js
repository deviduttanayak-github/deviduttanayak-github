import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../common/logo1.png"

function Navbar() {
    return (
        <div className="nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <a href="#"> <img className="logo-box" alt="being-noob" src={img} /> </a>
                            <div className="logo-name">beingnoob</div>
                            <div className="visible"><a>i</a></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6 menu">
                        <ul className="list">
                            <li><a href="#">home</a></li>
                            <li><a href="#">resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
