const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cache = require('./routeCache')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'recruitment',
})

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello Wordsqwref!");
})

app.post('/search', cache(300), (req, res) => {
    const title = req.body.title
    const fullTime = req.body.fullTime
    const location = req.body.location

    db.query("SELECT * FROM jobs WHERE title = ? AND full_time = ? AND location = ?", 
        [title, fullTime, location], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0){
                res.send(result);
            }else {
                res.send({message: "No jobs found"});
            }
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})