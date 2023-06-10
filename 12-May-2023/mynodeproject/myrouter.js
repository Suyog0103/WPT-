import { Router } from "express"
let ss= Router()
export default ss

ss.get("/", (req, res)=>{
    res.send("hi there")
})