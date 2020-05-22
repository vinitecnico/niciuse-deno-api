import { Router } from "https://deno.land/x/oak/mod.ts";

import { getProducts, createProducts } from "./controllers/productController.ts";

const router = new Router();

router
  .get('/', (response: any) => { response.body = 'Hello World!' })
  .get("/product", getProducts)
  .post("/product", createProducts);

export default router;