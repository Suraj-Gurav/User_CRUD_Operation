import React,{useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Update = () => {
    const {userId}=useParams();
    const [fullName,setFullName]=useState();
    const [emailId,setEmailId]=useState();
    const [password,setPassword]=useState();
    const [mobileNo,setMobileNo]=useState();
    const [user, setUser] = useState([]);
 
    const updateData=async (e)=>{
        e.preventDefault();
        const data={fullName, emailId, password, mobileNo};
        console.log(data);
        await axios.put(`http://localhost:6001/user/${userId}`,data);
        alert("Update Data Successfully");
        setFullName("");
        setEmailId("");
        setPassword("");
        setMobileNo("");
    }
    useEffect(() => {
        axios.get(`http://localhost:6001/user/${userId}`)
          .then(async (res) => {
            const data =await res.data;
            console.log(data);
            setUser(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    return (
        <>
        <center><h1 className='mt-4'>Update User Data</h1></center>
        <table className="table container">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>  
          {
          user.map((row) => {
            return (
                <tr>
                    <td>{row.fullName}</td>
                    <td>{row.emailId}</td>
                    <td>{row.mobileNo}</td>
                </tr>
                );   
            })
            }    
            </tbody>
            </table>
           <form onSubmit={updateData} className="mb-3 container">
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
                 <NavLink exact to="/"><button type="button" class=" mx-3 btn btn-secondary">Back</button></NavLink>
                </div>
            </form> 
        </>
    );
};

export default Update;