
import categoryModel from "../../../../DataBase/Model/categoryModel.js";


// Category schema (categoryName, image, createdBy)


// Add Category
export const addCategory = async(req,res)=>{
    try{
        let {categoryName}=req.body;
        req.body.image=req.file.filename;
        let foundCategory = await categoryModel.findOne({categoryName:req.body.categoryName});
        if(foundCategory) return res.json({messahe:"Category allredy founded"})
        let addCategory = await categoryModel.insertMany({
            categoryName,
            image:req.file.filename,
            createdBy:req.user.id
        })
        res.json({Message:'Category Added',addCategory})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}

// Update Category

export const updateCategory = async (req,res)=>{
try{
    let {categoryName}=req.body;
    req.body.image=req.file.filename;
    let updateCategory = await categoryModel.findOneAndUpdate(
        {_id:req.params.categoryid},
        {categoryName,
        image:req.file.filename},
        {new:true}
    )
    if(!updateCategory) return res.json({message:"Category not found"})

    res.json({Message:'Category Updated',updateCategory})
}
catch(error){
    res.send({message:"ERROR",error})
}

}

// Delete Category
export const deleteCategory = async (req,res)=>{
    let categoryId =req.params.categoryid
    try{
        let deleteCategory = await categoryModel.findByIdAndDelete(categoryId)
        if(!deleteCategory) return res.json({message:"Category not found"})

        res.json({Message:'Category Deleted',deleteCategory})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}


// Get All Categorys

export const getAllCategorys = async (req,res)=>{
    let categorys =await categoryModel.find()
    if(!categorys) return res.json({message:"Category not found"})
    res.json({Message:'Categorys',categorys})
}


// Get specific category   / Get Category By Id 

export const getCategoryById = async (req,res)=>{
    let categoryId =req.params.categoryid
    try{
        let foundCategory = await categoryModel.findById(categoryId)
        if(!foundCategory) return res.json({message:"Category not found"})

        res.json({Message:'Category Found',foundCategory})
    }
    catch(error){
        res.send({message:"ERROR",error})
    }
}