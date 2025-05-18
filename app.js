const express = require('express');
 
const app = express();

app.get('/', function (req, res) {
    res.send("************ MaxAI CD/CI GITHUB ***************");
});

app.post("/", (req, res) => {
    res.send("OK");
});

app.listen(3000, function () {
    console.log('Server running...');
});