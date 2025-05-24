import express from "express"

const app = express()


app.get("/",(req,res)=>{
    res.send("Express on vercel")
})

app.listen(3000, ()=>{
    console.log("[Server]: Running on port 3000")
})



