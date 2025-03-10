const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/Today");

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log(err);
});

const newSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    Number:{
        type:String
    }
});

const User = mongoose.model("User", newSchema);

module.exports = User;