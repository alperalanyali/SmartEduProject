const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.register = async (req,res)=>{
    try {
        const user =await User.create(req.body);
        res.status(201).json({
            status:'success',
            user
        })
        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
          });
    }
};

exports.loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email:email});        
        if(user){
            bcrypt.compare(password,user.password,(err,same)=>{
                if(same){
                    //User session
                    res.status(200).send('YOU ARE LOGGED IN');

                }
            });
        }

        
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
          });  
    }
}