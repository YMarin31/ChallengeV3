import mongoose from "mongoose"
import { productSchema } from "./schemas"


const productModel = mongoose.model("Producto", productSchema)

export {
  productModel
}