const Koa = require('koa');
const app = new Koa();

// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

// 加载路由
const Router = require('koa-router');
let article = require('./controller/article.js');
let type = require('./controller/type.js')
let product = require('./controller/product.js');
let works = require('./controller/works.js');
let about = require('./controller/about.js');

let router = new Router();
router.use('/article', article.routes());
router.use('/type', type.routes())
router.use('/product', product.routes());
router.use('/works', works.routes());
router.use('/about', about.routes());

app.use(router.routes());
app.use(router.allowedMethods());

const { connect, initSchemas } = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();




app.use(async (ctx) => {
    ctx.body = 'hello koa';
})

app.listen(3000, () => {
    console.log('start shop server');
});