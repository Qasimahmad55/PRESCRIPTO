import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/monodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoutes.js'
//app config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)
// test route
app.get('/', (req, res) => {
    res.send('api working')
})

app.listen(port, (req, res) => {
    console.log("server started", port);
})