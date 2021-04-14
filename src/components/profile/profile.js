import React from 'react'
import me from '../../common/images/ben-10.jpg';
import mail from "../../common/images/mail.png";
import linkedin from "../../common/images/linkedin.png";
import messenger from "../../common/images/messenger.png";
import insta from "../../common/images/insta.png";
import github from "../../common/images/github.png";

function Profile() {
    return (
        <div className="glassy">
            <div className="head">
                <img className="dp" src={me} /> 
                <div className="dn">Devidutta Nayak</div>
            </div>
            <div className="body">
                <div className="border-b"></div>
                <div className="about-me-head">About me</div>
                <div className="about-me-body">
                    Nothing to do so building this webpage. RIP life.
                </div>
            </div>
            <div className="social">
                <div className="border-b"></div>
                <div className="about-me-head">Contact</div>
                <div className="link-body">
                    <a href="mailto: deviduttanayak000@gmail.com"><img src={mail} /> </a>
                    <a href="#"><img src={linkedin} /></a>
                    <a href="#"><img src={insta} /></a>
                    <a href="#"><img src={messenger} /></a>
                    <a href="#"><img src={github} /></a>
                </div>
            </div>
            <div className="foot">
                <div className="border-b"></div>
                <div className="about-me-head">Ping</div>
                <div className="about-me-body">
                    I am here.
                </div>
            </div>
        </div>
    )
}

export default Profile
