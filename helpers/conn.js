const mongoose = require('mongoose');

mongoose.connect(process.env.url).then(
    ()=>{
        console.log("Database connection estabilished")
    },
    err =>{
        console.log(err)
    }
)