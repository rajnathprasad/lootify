import express from "express";
import cors from "cors";
import "dotenv/config";


//App config
const port = process.env.PORT || 4000
const app = express()

//middlewares
app.use(cors());
app.use(express.json());

// api endpoints
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>
console.log("Server runninig at : http://localhost:"+4000+"/"))

