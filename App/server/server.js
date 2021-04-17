const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

// const MeaningCloud = require('meaning-cloud');

// const meaning = MeaningCloud({
//     key: process.env.API_KEY,
//     secure: true,
//     uri: 'custom-uri',
//     endpoints: {
//         topics_extraction: '/sentiment-2.1'
//     }
// })

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../../dist')))

app.get('/', (req, res)=> {
    res.sendFile('./index.html')
})
app.get('/auth', (req, res)=> {
    res.json({"key": process.env.API_KEY});
})

app.post('/log', (req, res)=> {
    console.log(req.body)
    res.send('test')
})

const port = 3355;
const servingFunc = ()=> {console.log("Server is listening on localhost:"+port)}
app.listen(port, servingFunc);