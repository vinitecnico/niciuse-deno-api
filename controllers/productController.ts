import { RouterContext, Context } from "https://deno.land/x/oak/mod.ts";

export const helloWorld = (context: RouterContext) => {
  context.response.body = 'Hello world!';
};

export const getProducts = async (context: RouterContext) => {
  context.response.body = [{id: 1, name: 'test'}, {id: 2, name: 'test 2'}]
};

export const createProducts = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid recipe data" };
    return;
  }

  const { value: { id, name } } = await request.body();

  response.body = { id, name };
};