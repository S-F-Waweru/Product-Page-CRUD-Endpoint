import  express, { json }   from "express"

import { router } from "./routes"

const app = express()
app.use(json())
app.use("/products" , router)

app.listen(4000 ,()=>{
    console.log("App is Running")
})