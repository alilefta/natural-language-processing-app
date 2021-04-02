const dotenv = require('dotenv');


const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './../client')))

app.get('/', (req, res)=> {
    let filename = path.resolve(__dirname, './../client/index.html');
    res.sendFile(filename)
})
app.get('/auth', (req, res)=> {
    res.json({"key": process.env.API_KEY});
})

const port = 3355;
const servingFunc = ()=> {console.log("Server is listening on localhost:"+port)}
app.listen(port, servingFunc);