exports.getIndexPage = (req,res)=>{
    
    res.status(200).render('index',{page_name:'index'}); 
};

exports.getAboutPage = (req,res)=>{
    res.status(200).render('about',{page_name:'about'});
};

exports.getContactPage = (req,res)=>{
    res.status(200).render('contact',{page_name:'contact'});
};

exports.getCoursesPage = (req,res)=>{
    res.status(200).render('courses',{page_name:'courses'});
};



exports.getLoginPage = (req,res)=>{
    res.status(200).render('login',{page_name:'login'},);
};

exports.getRegisterPage = (req,res)=>{
    res.status(200).render('register',{page_name:'register'});
};

