const express = require("express");
const app = express()
const User = require("./database")
const cors = require('cors') 
const port = "4000"

//  data ko database my bhjny k liye apko ya likhna e likhna hy
app.use(express.json())

app.use(cors())
//  how we can chek our server is running or not
// --------------------------------------

//  home route
app.get("/",(req,res)=>{
   res.send("server is steup")
})

// ------------------------------

// create route  or (data insert into data base api)

app.post("/post",async(req,res)=>{
    try {
        //  now we put the data into User table
    const data = new User(req.body)
    const save= await data.save();
    res.send(save)
        
    } catch (error) {
        console.log(error)
    }
})

// -------------------------------------------------------------------

//  Now we make api for read the data from data base

app.get("/get",async(req,res)=>{
   try {
     const finddata = await User.find({});
     res.send(finddata);
   } catch (error) {
    console.log(error)
   }
})

// -------------------------------------------------------------------

//  Now we make a api for update the route

app.put("/update/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const update = await User.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(update);
    } catch (error) {
        console.log(error)
    }
})
// ----------------------------------------------------------------------
  
//     now we make api for delete the data 

app.delete("/delete/:id",async(req,res)=>{
    try {
        const deletedata = await User.findByIdAndDelete(req.params.id)
        res.send(deletedata)
    } catch (error) {
        console.log(error)
    }
})

// now we start server 
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})