import {createServer, request } from "node:http"
import fs from "fs"
const PORT=5500
fs.readFile("./index.html",function(err,html){
    if(err) throw err
    const server2=createServer((request,response)=>{
        response.writeHeader(200,{"Content-Type":"text/html"})
        response.write(html)
        response.end()
    }).listen(PORT,()=>console.log("server running at http://localhost:5500"))
})


