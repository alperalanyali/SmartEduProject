const Course = require("../models/Course");
const Category = require('../models/Category');
const User = require('../models/User');
exports.createCourse = async (req, res) => {
    console.log(req.body);
  try {
    const course = await Course.create({
      name:req.body.name,
      description:req.body.description,
      category:req.body.category,
      maximumStudentNumber:req.body.maximumStudentNumber,
      user:req.session.userID
    });
    
    res.status(201).redirect('/courses')
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};


exports.getAllCourses = async (req, res) => {
  try {

    let categorySlug = req.query.categories;
    
    const category = await Category.findOne({ slug: categorySlug});

    let filter = {};

    if(categorySlug){
      filter = {category:category._id};
    }
    const courses = await Course.find(filter).populate('user').sort('-createdAdd');
    const categories = await Category.find();
    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
  
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({slug:req.params.slug}).populate('user');

    res.status(200).render('course', {
      course,
      page_name: 'course-single',
  
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.enrollCourse = async (req,res)=>{
  try{
    let userId = req.session.userID;
    console.log(userId)
      let user = await User.findById(userId);
      console.log(user)
      await user.courses.push({_id:req.body.course_id});
    await user.save();
    res.status(200).redirect('/auth/dashboard');
  }catch (error) {
    res.status(400).json({status: 'fail', error});
  }
}