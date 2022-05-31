const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const userRoutes = require('./routes/user')
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000

app.use(userRoutes);

const start = async() => {
    try {
        await connectDB(process.env.MONGOO_URI)
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error)

    }

}

start()