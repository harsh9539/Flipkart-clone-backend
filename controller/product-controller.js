

import Product from '../Model/product-schema.js'


export const getProducts = async (request,response)=>{
    try{
        const products =await Product.find({});
        response.status(200).json(products);
    }catch(err){
        response.status(500).json({message:err.message});
    }
}