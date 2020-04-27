const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { port, uri } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {useNewUrlParser: true, userCreateIndex: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});