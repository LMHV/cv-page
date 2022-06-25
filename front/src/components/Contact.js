import React from "react";
import './Contact.css'

const Contact = ({text}) => {

    return (
        <div className="contact-container">
            <div className="contact-row-1">Contact me</div>

            <div className="contact-row-2">
                <div className='wrapper'>
                    <div className='input-data'>
                        <input type='text' required></input>
                        <div className='underline'></div>
                        <label>{text}</label>
                    </div>
                </div></div>
            <div className="contact-row-3">Tell me what are your thoughts</div>
        </div>
    )
}

export default Contact;