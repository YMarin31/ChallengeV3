import { Router, Request, Response } from "express"
const router = Router();

router.get("/products", (request: Request, response: Response) => {
    response.json()
})


router.get("/prices_s", (request: Request, response: Response) => {
    response.json()
})


router.patch("/prices_s", (request: Request, response: Response) => {
    response.json()
})


router.post("/prices_s", (request: Request, response: Response) => {
    response.json()
})


router.get("/usser", (request: Request, response: Response) => {
    response.json()
})

export default router;