const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/bookingsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use('/api', userRoutes)

app.listen(8000, () => {
    console.log('Server is up and running')
})