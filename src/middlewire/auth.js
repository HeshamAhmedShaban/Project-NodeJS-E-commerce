
import  Jwt  from "jsonwebtoken";


export const auth =(req,res,next)=>{
    let {token}=req.headers;
    if(token){
        Jwt.verify(token,'projectNode',(error,decoded)=>{
            if(error){
                res.status(401).json({message:"Invalid Token"})
            } 
            else{ 
                
                req.user=decoded;
                next()
            }
        })
    }

} 