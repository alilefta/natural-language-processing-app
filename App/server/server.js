const path = require('path');
const express = require('express');
const cors = require('cors');
const callAPI = require('./callAPI');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './../client')))

app.get('/', (req, res)=> {
    res.sendFile('index.html')
})
app.get('/Authenticate', (req, res)=> {
    res.json(callAPI)
})

const port = 3355;
const servingFunc = ()=> {console.log("Server is listening on localhost:"+port)}
app.listen(port, servingFunc);