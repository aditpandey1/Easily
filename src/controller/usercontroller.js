import {jobs , authenticateUser, registerUser ,add} from "../model/usermodel.js"

export const fetchjobs = (req,res)=>{
        
        res.render('jobs',{avjobs:jobs});
    }
export const showdata = (req,res)=>{
    res.render()
}
export const loginuser = (req,res)=>{
    const {email,password} = req.body;
    var currentPath = req.path;
    console.log(currentPath);
    
    if(authenticateUser({email,password})){
        req.session.user_name=req.session.name;
        console.log("name="+req.session.user_name);
        res.redirect("/");
    }
    else{
         // This will be '/login'
        res.render('nouserfound',{path : currentPath});
    }
}
export const adduser = (req,res)=>{
    const {email,password} = req.body;
    req.session.name = req.body.name;
    req.session.email=email;
    req.session.password=password;
    registerUser({email,password});
    res.render('login');
}

export const getdata = (req,res)=>{
    const id = req.params.id;

    const data = jobs.filter((job)=>{
        if(job.id==id){
            return job;
        }
    });
    res.render('portal',{jobdata:data});
}
export const applyjob=(req,res)=>{
    const id = req.params.jid;
    console.log("jid"+id);
    const data = jobs.filter((job)=>{
        if(job.id==id){
            job.applicants+=1;
        }
    });
    
    res.render('jobs',{avjobs:jobs});

}
export const logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    })
}
export const addjob = (req,res)=>{
    const data = req.body;
    add(data);
    console.log(data);
    res.render('jobs',{avjobs:jobs});
}