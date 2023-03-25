const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    description:{
        type:String,        
        required:true
    },

    maximumStudentNumber:{
        type:Number,
        required:true,
        default:10  
    },
    createdAdd:{
        type:Date,
        default: Date.now()
    },
})

const Course = mongoose.model('Course',CourseSchema);


module.exports = Course;