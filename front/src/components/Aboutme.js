import React from "react";
import './Aboutme.css'

const Aboutme = () => {


    return(
        <div className="second-container">

            <div className="left-side-aboutme">
                <div className="aboutme-container">
                    <h2 className="aboutme-title">About me</h2>

                </div>
                <div className="aboutme-description">
                    <p className="aboutme-desc1">I'm from Argentina, developing since 2020. I'm currently at the last year of Programming Science Career and loving to learn and be a Full Stack developer with a focus on design too. </p>
                    <p className="aboutme-desc2">Currently Available</p>
                </div>
            </div>

            <div className="right-side-aboutme">
                <div id='grid1'></div>
                <div id='grid2'>
                    <img id='myselfImg' alt='myself' src={require('../images/myself.jpg')}></img>
                </div>
                <div id='grid3'></div>
            </div>

        </div>
    )

}

export default Aboutme