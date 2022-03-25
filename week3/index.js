const express = require('express');

let app = express();

app.use(express.static('./public'));

const port = 3000
app.listen(port);