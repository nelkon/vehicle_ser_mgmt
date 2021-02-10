const express = require('express')
const bodyparser = require('body-parser')
// const Cors = require('cors');


const app = express();

const port = process.env.PORT || 5000;
// app.use(Cors());
// app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));



app.use(bodyparser.json());

app.listen(port, () => console.log(`Listen on Port ${port}`))

// app.get('', (req, res)=>{
//     res.send("Hello world");
// });

//import branch router

const branchRoutes = require('./src/api/routes/branch.route');

app.use('/api/branch', branchRoutes);

app.use('/createbranch', branchRoutes);

