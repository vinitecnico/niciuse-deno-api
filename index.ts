import { Application, Context } from "https://deno.land/x/oak/mod.ts";

import router from "./routes.ts";

const app = new Application();

app.use(router.routes());

console.log('Deno server is running: localhost:8000')
await app.listen({ port: 8000 });