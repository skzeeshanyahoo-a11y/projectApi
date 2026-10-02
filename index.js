const  express = require('express');
const mongoose = require ('mongoose');
require ('dotenv').config({override:true, debug:false})
const app = express();
app.use(express.json());
const mongoURI = process.env.MONGODB_URL;
const category = require('./routes/categoryRouter');
mongoose.connect(mongoURI).then(()=>{
    console.log('Mongodb connection extablished')
}).catch((err)=>{
    console.log('ERROR:'+err)
});

app.get('/', (req,res)=>{
    res.send('Hello, i am working fine')
})

app.use('/category',category)

app.listen(3500, ()=>{console.log(`server started 3500`)});