import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Form = () => {
    const [fullName,setFullName]=useState();
    const [emailId,setEmailId]=useState();
    const [password,setPassword]=useState();
    const [mobileNo,setMobileNo]=useState();

    const submitData=(e)=>{
        e.preventDefault();
        const data={
            fullName,
            emailId,
            password,
            mobileNo
        };
        axios.post("http://localhost:6001/user",data);
        alert("User Add Successfully");
        setFullName("");
        setEmailId("");
        setPassword("");
        setMobileNo("");
    }
    return (
        <>
        <center><h1 className='my-4'>Add User</h1></center>
            <form onSubmit={submitData} className="mb-3 container">
                <div className="mb-3">
                    <label htmlfor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" value={fullName} onChange={(e)=>{setFullName(e.target.value)}}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputEmail2" className="form-label">Email address</label>
                    <input type="email" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}}className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword2" className="form-label">Phone Number</label>
                    <input type="number" value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}}className="form-control" id="exampleInputPassword2"/>
                </div>    
                <div className="my-3 form-check container">
                 <button type="submit" className="btn btn-primary">Submit</button>
                 <NavLink exact to="/"><button type="button" className=" mx-3 btn btn-secondary">Back</button></NavLink>
                </div>

            </form>
    </>
    );
};

export default Form;