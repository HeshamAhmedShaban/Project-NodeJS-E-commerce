

export const Validation=(schema)=>{
    return (req,res,next)=>{
        let checkValidation= schema.validate(req.body,{abortEarly:false})
        if(checkValidation && checkValidation.error){
            res.json({Message:'Error Validation' ,Err:checkValidation.error.details})
        }else{
            next()
        }
    }
}



export const ValidationFile=(schema)=>{
    return (req,res,next)=>{
        let checkValidation= schema.validate(req.files,{abortEarly:false})
        if(checkValidation && checkValidation.error){
            res.json({Message:'Error Validation' ,Err:checkValidation.error.details})
        }else{
            next()
        }
    }
}
