import React from 'react';
import '../css/ContactAr.css';
import logo from '../images/Vector.svg';
import telegram from '../images/telegram.svg';
import whats from '../images/whats.svg';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg'
import location from '../images/location.svg'

const ContactAr = () => {
    return (
        <div>
            <div className="container text-center mt-5">
                <div className='text-center'>
                    <img src={logo} alt="..." className='contact-logo' />
                    <h2 className='contact-headng'>تواصل معنا</h2>
                    <p className='contact-paragraph'>هل لديك أي استفسار؟ لا تتردد في التواصل معنا !</p>
                </div>
                <div className='row d-flex justify-content-center mt-5 gap-5'>

                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={mail} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}>تحدث الي خدمة العملاء</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>نحن هنا لمساعدتك دائما ! </p>
                        <span style={{ color: "#0055FF", fontSize: "16px" }}>info@vconnct.com</span>
                    </div>
                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={location} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}>زورنا في الموقع</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>قم بزيارة المقر الرئيسي لمكتبنا.</p>
                        <span style={{ color: "#0055FF", fontSize: "16px" }}>اظهر في Google Maps</span>
                    </div>
                    <div className="one col-12 col-md-6 col-lg">
                        <div className='d-flex gap-2'>
                            <img src={phone} alt="..." className="photos" />
                            <img src={telegram} alt="..." className="photos" />
                            <img src={whats} alt="..." className="photos" />
                        </div>
                        <p style={{ fontWeight: "700", fontSize: "25px", marginTop: "15px" }}>اتصل بنا</p>
                        <p style={{ fontWeight: "300", fontSize: "20px" }}>من السبت للخميس من 10 صباحا الي 6 مساءا</p>
                        <span style={{ color: "#0055FF", fontSize: "16px", direction: "rtl" }}>1050837704 20+</span>
                    </div>

                </div>
                <hr style={{ width: "100%", marginTop: "50px", marginBottom: "50px", display: "inline-block" }} />
            </div>
        </div>

    );
};

export default ContactAr;