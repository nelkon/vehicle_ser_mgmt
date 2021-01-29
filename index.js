const express = require('express')
const bodyparser = require('body-parser')


const app = express();

const port = process.env.PORT || 5000;

app.use(bodyparser.json());

app.get('', (req, res)=>{
    res.send("Hello world");
});

//import branch router

const branchRoutes = require('./src/api/routes/branch.route');

app.use('/api/branch', branchRoutes);

app.listen(port, () => console.log(`Listen on Port ${port}`))