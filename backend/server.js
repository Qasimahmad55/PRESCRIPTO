import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/monodb.js'
import connectCloudinary from './config/cloudinary.js'
//app config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors())

//api endpoints

app.get('/', (req, res) => {
    res.send('api working')
})

app.listen(port, (req, res) => {
    console.log("server started", port);
})