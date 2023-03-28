
const mongoose = require('mongoose');
const express = require('express');

const pageRoute = require('./routes/pageRoute');
const courseRoute =require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const authRoute = require('./routes/authRoute');


const app = express();

// Connect DB
mongoose.connect('mongodb+srv://alanyalialper:metallica1@smartedu.daxe9sy.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false,
    // useCreateIndex:true
}).then(()=>{
    console.log('Connected to DB');
})


// Template Engine
app.set('view engine',"ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',pageRoute);
app.use('/auth',authRoute);
app.use('/courses',courseRoute);
app.use('/categories',categoryRoute);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})