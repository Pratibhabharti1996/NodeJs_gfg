import koa from "Koa";
import Router from "Koa-Router";

const server = new koa();
const router = new Router();

router.get("/a", ctx => {ctx.response.body = "Koa Api a is created successfully!!"})
router.get("/b", ctx => {ctx.response.body = "Koa Api b is created successfully!!"})
server.use(router.routes());
server.listen(process.env.PORT || 3000, () => console.log("KOA server is created succesfully"))