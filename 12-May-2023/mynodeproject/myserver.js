import express from 'express'
let app= express()

import ss from "./myrouter.js"
ss.use("/suyog", ss)

app.listen(150,()=>{
    console.log("server on 150")
})