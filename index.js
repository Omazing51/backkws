const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');
// const { use } = require('./routes/correoRoutes');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));

app.listen('8080', ()=>{
    console.log('listening');
})