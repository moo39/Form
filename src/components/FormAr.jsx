import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/FormAr.css'
import image from '../images/Image.svg'
const FormAr = () => {
    return (
        <div className='container'>
            <div className="row parent w-100">
                <div className="row contact-form col-12 col-lg-7 ">
                    <Form className='contact-form-content d-flex flex-column  '>
                        <Form.Group className="groub mb-3" controlId="formBasicName">
                            <Form.Label className='name'>الاسم الكامل <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control className='feild' type="text" placeholder="الاسم الكامل" />
                        </Form.Group>

                        <Form.Group className="groub mb-3" controlId="formBasicEmail">
                            <Form.Label className='name'>البريد الالكتروني<span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control className='feild' type="email" placeholder="البريد الالكتروني " />
                        </Form.Group>

                        <Form.Group className=" groub mb-3" controlId="formBasicOrganization">
                            <Form.Label className='name'>اسم الشركة <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control className='feild' type="text" placeholder="اسم الشركة " />
                        </Form.Group>

                        <Form.Group className="groub mb-3" controlId="formBasicNumber">
                            <Form.Label className='name'>رقم الهاتف <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control className='feild' type="text" placeholder="رقم الهاتف" />
                        </Form.Group>

                        <hr style={{ width: "auto" }} />

                        <Form.Group className="groub mb-3" controlId="formBasicEria">
                            <Form.Label className='name'>أعطنا ملخصًا قصيرًا لطلبك <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control className='feild-special' as="textarea" placeholder="شراء باقة كبيرة، الاستفسار عن الأسعار، الخ..." />
                        </Form.Group>
                    </Form>
                    <button className='main-btn' type='submit'>ارسل</button>
                </div>
                <div className=' contact-image d-flex justify-content-center  col-12 col-lg-5'>
                    <img src={image} alt="..."  />
                </div>
            </div>
        </div>
    );
};

export default FormAr;