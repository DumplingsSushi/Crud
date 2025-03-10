import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const nav = useNavigate()

    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [num, setNum] = useState(''); 

    const handelSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/add",{
                firstname,lastname,num
            });
            console.log('User  added:', res.data);
            nav("/");
        }
        catch(err){
            console.log(err);
        }
    }
    return ( 
        <div>
            <h1>Kindlyy add </h1>
            <div className="my-2 w-fit h-fit p-6 mx-auto items-center mt-44 border border-black rounded-sm">
                <form onSubmit={handelSubmit}>
                    <label>First Name </label>
                    <input className="border border-black rounded-sm mx-3" type="text" value={firstname} onChange={(e)=>setFirst(e.target.value)}/><br />
                    <label className="mt-2" >Last Name </label>
                    <input className="border border-black rounded-sm mx-3 mt-3" type="text" value={lastname} onChange={(e)=>setLast(e.target.value)}/><br /> 
                    <label >Number  </label>
                    <input className="border border-black rounded-sm mx-7 mt-3" type="text" value={num} onChange={(e)=>setNum(e.target.value)}/><br />
                    <button className="bg-green-300 rounded-sm px-2 mt-5 mx-28" type="submit">Add User</button>
                </form>
            </div>
        </div>
     );
}

export default Add;