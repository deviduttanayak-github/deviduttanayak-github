import React from 'react';
import Card from "./card";

function Something() {

    var start = 1;
    const change = (e) => {
        let x = e.target.id;
        console.log("D: ", document.getElementById("ss") );
        // document.getElementById("1").style.display = "none";
    };

    return (
        <div>
            <div className="title-1">
                Projects
            </div>
            <div id="ss" className="show">
                {/* <button id="l" onClick={change}>left</button> */}
                <Card id="1" title="here is something 1" img_path="github.png" brief="it does something" />
                {/* <Card id="2" title="here is something 2" img_path="github.png" brief="it does something" />
                <Card id="3" title="here is something 3" img_path="github.png" brief="it does something" />
                <Card id="4" title="here is something 4" img_path="github.png" brief="it does something" />
                <Card id="5" title="here is something 5" img_path="github.png" brief="it does something" /> */}
                {/* <button id="r" onClick={change}>right</button> */}
            </div>

            <div className="title-1">
                Experience
            </div>
            <div className="show">
                
            </div>
            
        </div>
    )
}

export default Something
