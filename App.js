const express = require('express')
const app = express()
const dataRouter = require("./Routes/Data")
const cors = require('cors')
// app.get("/Home",function(req,res){
//     res.send("Home")
// })
app.use(cors())
app.use("/api",dataRouter)
app.listen(process.env.PORT||9090,function(){
    console.log("Application is running");
})