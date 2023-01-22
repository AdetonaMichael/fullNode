import express from "express";
import config from "./config.js";
import apiRouter from "./api/index.js";


const server = express();

server.get('', (req, res)=>{
    res.send('Hello Express');
});
server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/about.html', (req, res)=>{
    res.send('the about us page');
})

server.listen(config.port, ()=>{
     console.info('Express Listening on Port', config.port)
});

 