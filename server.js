const express = require('express');
const app = express();
app.listen(3000,() => console.log('listen on 3000'));
app.use(express.static('public'));


