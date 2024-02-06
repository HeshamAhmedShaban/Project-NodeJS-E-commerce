import 'dotenv/config'

import express from 'express';
import connection from './DataBase/Connection.js';
import userRoutes from './src/modules/User/userRoutes.js';
import productRoutes from './src/modules/Product/productRoutes.js';
import categoryRoutes from './src/modules/Category/categoryRoutes.js';
import couponRoutes from './src/modules/Coupon/couponRoutes.js';
import cartRoutes from './src/modules/Cart/cartRoutes.js';



connection()
const app = express();
app.use(express.json());
app.use('/images', express.static('images'));
app.use(userRoutes);
app.use(productRoutes); 
app.use(categoryRoutes);
app.use(couponRoutes)
app.use(cartRoutes)



// app.post('/',upload.single('image'),(req,res)=>{
//     console.log(req.file);
//     res.send("Hi");
// })

app.listen(7000, ()=>{  
    console.log('Welcome in Port 7000');
}) 





