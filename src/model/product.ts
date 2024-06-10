import { Request } from "express"

export interface Product {
    id : number
    name : string
    description: string
    price : string
}
export interface AddProduct {
    name : string
    description: string
    price : string
}

export interface TypedProduct extends Request {
    body : AddProduct
}

