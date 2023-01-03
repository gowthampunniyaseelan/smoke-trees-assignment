const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const UserModel = require("./models/user")
const AddressModel = require("./models/address")


app.use(cors())
app.use(express.json())
dotenv.config()


mongoose.connect(process.env.DB_URI,{
  useNewUrlParser: true
}).then(()=>{
  console.log("DB CONNECTED");
}).catch(e=>{
  console.log(e);
})

app.post("/user",(req,res)=>{
  UserModel.create(req.body,(err,result)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(201).send(result)
    }
  })
})


app.post("/address",(req,res)=>{
  AddressModel.create(req.body,(err,result)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(201).send(result)
    }
  })
})


const port = process.env.PORT || 9000
app.listen(port,()=>{
  console.log("Localhost listening on",port);
})
