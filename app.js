const express = require('express');
 
const app = express();

app.get('/',  (req, res) => {
    res.send("************ MaxAI CD/CI GITHUB ***************");
});

app.post("/", (req, res) => {
    res.send("OK 23052025-2");
});

app.listen(3000, function () {
    console.log('Server running...');
});