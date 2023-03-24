const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send('index'); 
});


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})