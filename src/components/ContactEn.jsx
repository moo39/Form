import React from 'react';
import '../css/ContactEn.css';
import logo from '../images/Vector.svg';
import telegram from '../images/telegram.svg';
import whats from '../images/whats.svg';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg'
import location from '../images/location.svg'

const ContactEn = () => {
    return (
        <div>
            <div className="container text-center mt-5">
                <div className='text-center'>
                    <img src={logo} alt="..." className='contact-logo' />
                    <h2 className='contact-headng'>Contact us</h2>
                    <p className='contact-paragraph'>Have a question to ask? Don’t hesitate to get in touch !</p>
                </div>
                <div className='row d-flex justify-content-center mt-5 gap-5'>

                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={phone} alt="..." className="photos" />
                            <img src={telegram} alt="..." className="photos" />
                            <img src={whats} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}> Call us</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>Sat-Thurs from 10 AM to 6 PM</p>
                        <span style={{ color: "#0055FF", fontSize: "16px" }}>+20 1050837704</span>
                    </div>
                    
                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={location} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}>Visit us</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>Visit our office HQ.</p>
                        <span style={{ color: "#0055FF", fontSize: "16px" }}>View on Google Maps</span>
                    </div>
                    
                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={mail} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}>Chat to support</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>We’re always here to help!</p>
                        <span style={{ color: "#0055FF", fontSize: "16px" }}>info@vconnct.com</span>
                    </div>

                </div>
                <hr style={{ width: "100%", marginTop: "50px", marginBottom: "50px", display: "inline-block" }} />
            </div>
        </div>

    );
};

export default ContactEn;