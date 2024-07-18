export const auth = (req,res,next)=>{
    res.locals.user=req.session.name;
    next();
}
export const test = (req,res,next)=>{
    var currentpath = req.path;
    if(req.session.user_name){
        next();
    }
    else{
        res.render("nouserfound",{path: currentpath})
    }
}