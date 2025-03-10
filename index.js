const express = require("express");
const User = require("./Config");
const cors = require("cors");
const bosyParesr = require("body-parser");
// git config --global core.autocrlf input

const app = express();

app.use(bosyParesr.json())

app.use(cors());


const PORT = 5000;

app.get("/", async (req,res)=>{
    try{
        const data = await User.find();
        res.json(data);
    }
    catch(error){
        console.log(error)
    }
});

app.post("/add", async(req,res)=>{
    try{
        const firstName = req.body.firstname;
        const lastName = req.body.lastname;
        const Number = req.body.num;
        const newUser = new User({firstName , lastName , Number });
        await newUser.save();
        console.log("Details Saved !!");
    }
    catch(err){
        console.log(err)
    }
})

app.get('/Update/:id' , async (req,res)=>{
    try{
        const id= req.params.id;
        const sUser = await User.findById(id);
        res.json(sUser);
    }
    catch(error){
        console.log(error)
    }
})

app.put("/Update/:id" , async (req,res)=>{
    const id = req.params.id;
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const Number = req.body.num;
    const updateUser = await User.findByIdAndUpdate({_id:id},{firstName,lastName,Number})
})


app.delete("/del/:id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        console.log("DEleted!!")
    }
    catch(error){
        console.log(error);
    }
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
