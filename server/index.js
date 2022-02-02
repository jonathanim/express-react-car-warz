const express = require('express'); //Line 1
const app = express(); //Line 2
const cors = require('cors')
require('dotenv').config({ debug: true })
const port = process.env.PORT || 5000; //Line 3
const data = require('./data.js')
// This displays message that the server running and listening to specified port



app.use(cors())
// create a GET route

app.get('/', (req, res) => { //Line 9
    res.send("hello home"); //Line 10
});
app.get('/api', (req, res) => { //Line 9
    res.json(data); //Line 10
});


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6