import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm('service_66vt0qj', 'template_xhdvtzv', form.current, 'PTsk5M-42EVdo_oeN')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error)
            });
    }



    return (
        <div className="contact-container">
            <div className="contact-row-1">Contact me</div>

            <div className="contact-row-2">
                <form ref={form} id='myform' onSubmit={sendEmail}>
                    <input name='from_name' type='email' placeholder="Email" className='input' required></input>
                    <input name='message' type='text' placeholder="Tell me what are your thoughts" className="input-desc" required></input>
                    <button className="button-submit">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;