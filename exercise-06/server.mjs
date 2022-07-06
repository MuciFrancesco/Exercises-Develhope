import {createServer, request} from "node:http"
import data from "./data.json" assert { type: "json" }
const server= createServer((request,response)=>{
    response.statusCode=200
    response.setHeader("Content-Type","application/json")
    const jsonResponseBody=JSON.stringify(data)
    response.end(jsonResponseBody)
})


server.listen(5500,()=>{
    console.log("server running at http://localhost:5500")
})
