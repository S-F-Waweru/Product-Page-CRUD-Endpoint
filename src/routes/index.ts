import Router from "express";
import { addProduct, deleteProduct, updateProduct, getProduct, getProducts } from "../controller";

export const router = Router()
console.log(" we are at routes")
router.get('', getProducts)
router.get('/:id', getProduct)
router.post('', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

// export default router
