const bodyParser= require('body-parser'); 
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); // allows to recieve data with json format from our request variables at the frontend
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors()); 

app.get('/' , (req,res)=>{
    res.send("this is the home url /");
})

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>console.log(`server running on port ${PORT}`))