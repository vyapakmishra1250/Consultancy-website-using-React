import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) =>{
         e.preventDefault();
         alert(
             `My name is ${data.fullname}. my mobile number is ${data.phone}. my mobile mail is ${data.email}. my mobile msg is ${data.msg}`
         )
    }
    return(<>
    <div className="my-5">
        <h1 className="text-center">Contact us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">FullName</label>
                  <input type="name" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full Name"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your 10 digit mobile"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                   <label for="exampleFormControlTextarea1" class="form-label">Message or Query</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                </div>
                <div class="col-auto">
                   <button type="submit" class="btn btn-outline-primary">Confirm</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>);
};

export default Contact;