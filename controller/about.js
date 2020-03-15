const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.get('/getAbout', async (ctx) => {
    const About = mongoose.model('About');
    await About.find().exec().then(res => {
        ctx.body = res;
    })
});

const fs = require('fs')
router.get('/insertAbout', async (ctx) => {
    fs.readFile('./data/about.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let count = 0;
        const About = mongoose.model('About');
        data.map((value, index) => {
            let about = new About(value);
            about.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch(err => {
                console.log('失败:' + err);
            })
        });
    });
    ctx.body = '导入数据';
});

module.exports = router;