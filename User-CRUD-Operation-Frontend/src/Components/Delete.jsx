import axios from "axios";
import React from "react";
import { NavLink,useParams } from "react-router-dom";

const Delete = () => {
    const {userId}=useParams();
    let deleteUser=()=>{
        axios.delete(`http://localhost:6001/user/${userId}`);
        alert("User Delete Successfully");    
    };
    return(
        <>  
            <div className="my-5 p-5 container">
               <center><h1 className="my-3">Are You Sure Delete User Data</h1>
                <button type="button" onClick={deleteUser} className="mx-3 my-3 btn btn-secondary">Yes</button>
                <NavLink exact to="/"><button type="button" className="mx-3 my-3 btn btn-primary">No</button></NavLink></center >
              </div>
        </>
    )

};


export default Delete;