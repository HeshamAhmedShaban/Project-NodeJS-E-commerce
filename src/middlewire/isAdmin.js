


export const isAdmin= (req,res,next)=>{
    let role =req.user.role;
    if(role == 'admin'){
        next();
    }
    else{
        res.status(401).json({message:"You are not admin"})    
    }
}