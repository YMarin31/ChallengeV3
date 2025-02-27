import { Router, Request, Response } from "express"
import { productModel } from "./../models/models";

const router = Router();

router.get("/products", async (request: Request, response: Response) => {

    try {
        const products = await productModel.find({})
        response.status(200).json({
            products
        })
    } catch (error) {
        response.status(500).json({
            message: "unexpected error"
        })
    }

})


router.get("/prices_s", (request: Request, response: Response) => {
    response.json()
})


router.patch("/prices_s", (request: Request, response: Response) => {
    response.json()
})


router.post("/prices_s", (request: Request, response: Response) => {
    response.json({message: "precio especial creado"})
})


router.get("/usser", (request: Request, response: Response) => {
    response.json()
})

export default router;