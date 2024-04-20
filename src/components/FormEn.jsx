import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../css/FormEn.css';
import image2 from '../images/Image2.svg';
import axios from 'axios';

const FormEn = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        full_name: '',
        email_address: '',
        organization_name: '',
        phone_number: '',
        message: '',
    });

    function submit(e) {
        e.preventDefault(); //Prevent the page from re-loading
        axios.post("https://api.dragonteam.dev/callapi", {
            url: "api/method/variiance.vconnct.api.v1.vconnct_engines.controllers.contact_us_sales.submit_contact_us_sales_forum",
            data: {
                full_name: data.full_name,
                email_address: data.email_address,
                organization_name: data.organization_name,
                phone_number: data.phone_number,
                message: data.message,
                page_type: "Technical"
            },

        }).then(res => { console.log(res.data); }).catch((error) => {
            console.log(error);
        });

        //form valdiation
        let newErrors = {};
        if (data.full_name === '') {
            newErrors.full_name = 'Name is required';
        }
        if (data.email_address === '') {
            newErrors.email_address = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email_address)) {
            newErrors.email_address = 'Email is invalid';
        }
        if (data.organization_name === '') {
            newErrors.organization_name = 'Association name is required';
        }
        if (data.phone_number === '') {
            newErrors.phone_number = 'phone number is required';
        }
        if (data.message === '') {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        // إرسال البيانات إذا لم تكن هناك أخطاء
        if (Object.keys(newErrors).length === 0) {

            console.log('Form data submitted:', data);
            setData({
                full_name: '',
                email_address: '',
                organization_name: '',
                phone_number: '',
                message: '',
            });
        }
        // to reset form
        // setData({
        // full_name:'',
        // email_address:'',
        // organization_name:'',
        // phone_number:'',
        // message:'',
        // });
    };

    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    };

    return (
        <div className='container'>
            <div className="row parent w-100">
                <div className="row contact-form col-12 col-lg-7 ">
                    <Form onSubmit={submit} className='contact-form-content d-flex flex-column  '>
                        <Form.Group className="groub mb-3" controlId="formBasicName">
                            <Form.Label className='name'>Full name  <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="full_name" value={data.full_name} className='feild' type="text" placeholder=" Full name" />
                            {errors.full_name && <p>{errors.full_name}  <span style={{ color: "red" }}>*</span> </p>}
                        </Form.Group>

                        <Form.Group className="groub mb-3" controlId="formBasicEmail">
                            <Form.Label className='name'> Email address<span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="email_address" value={data.email_address} className='feild' type="email" placeholder=" Email address " />
                            {errors.email_address && <p>{errors.email_address}  <span style={{ color: "red" }}>*</span></p>}
                        </Form.Group>

                        <Form.Group className=" groub mb-3" controlId="formBasicOrganization">
                            <Form.Label className='name'> Association or organization name <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="organization_name" value={data.organization_name} className='feild' type="text" placeholder=" Association name " />
                            {errors.organization_name && <p>{errors.organization_name}  <span style={{ color: "red" }}>*</span></p>}
                        </Form.Group>

                        <Form.Group className="groub mb-3" controlId="formBasicNumber">
                            <Form.Label className='name'> Phone number <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="phone_number" value={data.phone_number} className='feild' type="text" placeholder=" Phone number" />
                            {errors.phone_number && <p>{errors.phone_number}  <span style={{ color: "red" }}>*</span></p>}
                        </Form.Group>

                        <hr style={{ width: "auto" }} />

                        <Form.Group className="groub mb-3" controlId="formBasicEria">
                            <Form.Label className='name'> Give us a brief description of your request<span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control onChange={(e) => handle(e)} id="message" value={data.message} className='feild-special' as="textarea" placeholder="Buying a big package, asking for prices, etc... " />
                            {errors.message && <p>{errors.message}  <span style={{ color: "red" }}>*</span></p>}
                        </Form.Group>
                        <button className='main-btn' type='submit'>Submit</button>
                    </Form>
                </div>
                <div className=' contact-image d-flex justify-content-center  col-12 col-lg-5'>
                    <img src={image2} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default FormEn;
