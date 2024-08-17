// const express = require('express');
import express, {static} from 'express';

const app = express();
// app.use(express.static('dist'));
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("Welcome to the backend");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [{
        id:1,
        title:"first joke",
        content:"this is the first joke"
    },{
        id:2,
        title:"second joke",
        content:"this is the second joke"
    },{
        id:3,
        title:"third joke",
        content:"this is the third joke"
    },{
        id:4,
        title:"forth joke",
        content:"this is the forth joke"
    },{
        id:5,
        title:"fifth joke",
        content:"this is the fifth joke"
    }];
    res.send(jokes);
})
app.listen(port, () => {
    console.log("App listening on port " + port);
})