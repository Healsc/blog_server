const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => {
    console.log('请求成功')
    ctx.body="请求成功"
});


/* 获取首页推荐的几篇文章 */
router.get('/getHomeArticle', async (ctx) => {
    const Article = mongoose.model('Article')
    await Article.find({title:"mongoose"}).exec().then((res)=>{
        ctx.body = res
    }).catch((err)=>{
        ctx.body = err
    })  

    
    console.log('请求成功')
});


const fs = require('fs')
router.get('/insertArticle', async (ctx) => {
    fs.readFile('./data/article.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let count = 0;
        const Article = mongoose.model('Article');
        data.map((value, index) => {
            let article = new Article(value);
            article.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch(err => {
                console.log('失败:' + err);
            })
        });
    });
    ctx.body = '导入数据ing';
});


module.exports = router;