const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');
router.get('/insertWorks', async (ctx) => {
    fs.readFile('./data/works.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let count = 0;
        const Works = mongoose.model('Works');
        data.map((value, index) => {
            let works = new Works(value);
            works.createDate= new Date()
            works.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch(err => {
                console.log('失败:' + err);
            })
        });
    });
    ctx.body = '导入数据';
});

router.get('/getWorks',async (ctx)=>{
    const Works = mongoose.model('Works');
    await Works.find().sort({"createDate":-1}).exec().then((res)=>{
        ctx.body = res;
    })
})

module.exports = router;