import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/style.css';
import Nav from "../components/navbar/navbar";
import Profile from './profile/profile';
import Something from './showcase/something'

function Main() {
    return (
        <div className="bg">
            <Nav />
            <div className="container-fluid">
                <div className="row  mt-3">
                    <div className="col-lg-3 sm-12">
                        <Profile />
                    </div>
                    <div className="col-lg-9 sm-12">
                        <Something />
                    </div>
                </div>
                <div className="row mt-3 bg-success">
                    under construction
                </div>
            </div>
        </div>
    )
}

export default Main
