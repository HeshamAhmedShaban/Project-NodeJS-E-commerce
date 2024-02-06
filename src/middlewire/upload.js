

import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import {v2 as cloudinary} from 'cloudinary';


const storage= multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        cb(null,uuidv4() +"_"+ file.originalname)
    }
})


let upload = multer({storage})

export default upload;




cloudinary.config({ 
    cloud_name: process.env.Cloudname, 
    api_key: process.env.APIkey, 
    api_secret: process.env.APIsecret 
});



export  const cloudinaryUploadImage=async(file)=>{
    try{
        let result=await cloudinary.uploader.upload(file)
        return result;
    }
    catch(err){
        return err
    }
    
}

export const cloudinaryDeleteImage=async(publicid)=>{
    try{
        let result=await cloudinary.uploader.destroy(publicid)
        return result;
    }
    catch(err){
        return err
    }
}

