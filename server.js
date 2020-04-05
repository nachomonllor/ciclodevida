const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/ciclodevida2'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/ciclodevida2/index.html'));
});

console.log('Finalizo!!');