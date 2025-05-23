const express = require('express');
 
const app = express();

app.get('/',  (req, res) => {
    res.send("************ MaxAI CD/CI GITHUB ***************");
});

app.post("/", (req, res) => {
    res.send("OK 23052025-2");
});

// Exporta o app para testes
module.exports = app;

if (process.argv[1] === new URL(import.meta.url).pathname) {
    app.listen(3000, () => {
        console.log('Server running...');
    });
}