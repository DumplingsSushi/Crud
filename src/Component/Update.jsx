import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();

    const [fname, setFirst] = useState('');
    const [lname, setLast] = useState('');
    const [num, setNum] = useState('');

    const nav = useNavigate();

    useEffect(()=>{
        const Fetch = async()=>{
            try{
                const res = await axios.get('http://localhost:5000/Update/'+id);
                setFirst(res.data.firstName);
                setLast(res.data.lastName);
                setNum(res.data.Number);
            }
            catch(error){
                console.log(error);
            }
        }
        Fetch();
    },[])

    const handelUpdate = async(e)=>{
        e.preventDefault();
        try{
            await axios.put('http://localhost:5000/Update/'+id , {
                fname,lname,num
            })
            console.log("Updated!!");
            nav('/');
        }
        catch(error){

        }
    }
    
    return ( 
        <div>
            <div className="p-7 mx-auto w-fit my-44 bg-orange-100 rounded-lg justify-center">
                <form onSubmit={handelUpdate} >
                    <label>First Name</label>
                    <input type="text" name="fname" className="borde rounded-md mt-3 mx-3" value={fname} onChange={(e)=>setFirst(e.target.value)}/><br />
                    <label>Last Name</label>
                    <input type="text" name="fname" className="border rounded-md mt-3 mx-3" value={lname} onChange={(e)=>setLast(e.target.value)}/><br />
                    <label>Number</label>
                    <input type="text" name="fname" className="border rounded-md mt-3 mx-7" value={num} onChange={(e)=>setNum(e.target.value)}/><br />
                    <button className="bg-green-200 px-2 rounded mt-5 mx-28">Update</button>
                </form>
            </div>
        </div>
     );
}
 
export default Update;