import { Request, Response } from "express";
import { Product, TypedProduct } from "../model/product";
const products:Product[] = []

// get all 
export function  getProducts(req : Request, res : Response){
    console.log('we are here')
    res.status(200).json(products)
}

export function getProduct(req : Request<{id : string}>, res : Response ){
    const id  = +req.params.id
    const product = products.find(x => x.id === id)
    if (product != undefined){
     return    res.status(200).json(product)
    }
    return  res.status(404).json({message : "Product not found"})
}


export function addProduct(req :TypedProduct , res :Response){
    const {name, description, price} = req.body

    const newProduct : Product = {
        id : Math.floor(Math.random()*10000),
        name,
        description,
        price
    }

    products.push(newProduct)
    res.status(201).json({message : "product added Successfully"})
}

// update product

export function updateProduct (req : Request <{id : string}>, res : Response){
    const id = +req.params.id
    const product = products.find(x => x.id === id)
    const {name , description, price} = req.body

    if(product != undefined){
        product.name = name
        product.description = description
        product.price = price

        return res.status(200).json({message : "Product Updated Successfully"})
    }

    return res.status(404).json ({message : "Product not Found !!"})
}


export function deleteProduct(req : Request<{id : string}>, res : Response){

    const id = +req.params.id
    const productIndex = products.findIndex(x => x.id === id)
    if(productIndex >= 0){
        products.splice(productIndex, 1)
         return res.status(200).json({message : "Product Deleted Successfully"})
    }
    return res.status(404).json({message : "Product Not Found"})    
}