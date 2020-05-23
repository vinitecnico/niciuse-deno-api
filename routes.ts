import { Router } from "https://deno.land/x/oak/mod.ts";

import { getProducts, createProducts, helloWorld } from "./controllers/productController.ts";

const router = new Router();

router
  .get('/', helloWorld)
  .get("/product", getProducts)
  .post("/product", createProducts);

export default router;