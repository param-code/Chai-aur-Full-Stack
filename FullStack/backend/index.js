// const express = require('express');
import express from 'express';
const app = express();

// app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Server is Ready!!');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [{
        id:1,
        title:'A joke',
        content:'This is a joke'
    },{
        id:2,
        title:'another joke',
        content:'This is a joke'
    },{
        id:3,
        title:'third joke',
        content:'This is a joke'
    },{
        id:4,
        title:'fourth joke',
        content:'This is a joke'
    },{
        id:5,
        title:'fifth joke',
        content:'This is a joke'
    }];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
