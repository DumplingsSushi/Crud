import {useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Box = () => {
    const [user , setUser] = useState([]);

    useEffect(()=>{
        const Fetch = async ()=>{
            try{
                const res = await axios.get('http://localhost:5000/');
                setUser(res.data);
            }
            catch(error){
                console.log(error);
            }
        }
        Fetch();
    },[]);

    const handelDelete = async(id)=>{
        try{
            await axios.delete("http://localhost:5000/del/"+id);
            console.log("Deleted Record !!")
        }
        catch(error){
            console.log(error)
        }
    }
    
    const nav=useNavigate();
    return ( 
        <div>
            <div className="mx-auto mt-56 h-fit w-fit border border-black-300 border-spacing-5 rounded-2xl p-8 bg-gray-300">
                <button onClick={()=>{nav("./add")}} className="border-black bg-green-300 border rounded-md px-2">Add+</button>
                <table className="table-auto mt-6 p-3 border-spacing-3">
                    <thead>
                        <tr className="">
                            <th className="px-2 w-fit">First Name</th>
                            <th className="px-2">Last Name</th>
                            <th className="px-2">Number</th>
                            <th className="px-2 mx-aut0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item) => (
                            <tr key={item._id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.Number}</td>
                                <td className="flex ">
                                    <button className="bg-orange-300 rounded-md px-2 mx-2" onClick={()=>{nav(`/Update/${item._id}`)}} >Update</button>
                                    <button className="bg-red-300 rounded-md px-4 mx-2 " onClick={(e)=>{handelDelete(item._id)}} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
     );
}
 
export default Box;