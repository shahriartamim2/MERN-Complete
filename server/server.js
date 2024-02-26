require("dotenv").config();
const express = require("express")
const app = express()
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const connectDb = require('../server/utils/db')
const errorMiddleware = require("../server/middlewares/error-middleware")

app.use(express.json())


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);


const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at port : ${PORT}`)
    })
})
