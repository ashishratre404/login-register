import express from "express";
import cors from 'cors';
import mongoose  from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () =>{
    console.log("DB connected")
});

//mongoDB work here

// Schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// model 
const User = new mongoose.model("User", userSchema)

// Routes
app.post("/login", (req, res) =>{
    const {email, password} = req.body
    User.findOne({email : email}, (err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message : "login successful", user:user})
            }else{
                res.send({message:"wrong password"})
            }
        }else{
            res.send({message:"user not found"})
        }
    })
})
app.post("/register", (req, res) =>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) =>{
        if(user){
            res.send({message:"user already exist"})
        }else{
            const user = new User({
                name:name,
                email:email,
                password:password
            })
            user.save( err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully registerd, please login to navigate website"})
                }
            })
        }
    })
    
})

app.listen(5000, ()=>{
    console.log("listening to port 5000")
})