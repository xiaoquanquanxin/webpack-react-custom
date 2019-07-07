const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const historyApiFallback = require("koa2-connect-history-api-fallback").historyApiFallback;

console.log(historyApiFallback);
app.use(historyApiFallback({index: "/", whiteList: ["/api"]}));

//  session
const session = require('koa-session');
app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};


app.use(session(CONFIG, app));


//  静态资源
const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname, '../../dist/web'));
app.use(main);


// logger
app.use(async (ctx, next) => {
    await next();
    // const rt = ctx.response.get('X-Response-Time');
    // console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    // const start = Date.now();
    await next();
    // const ms = Date.now() - start;
    // ctx.set('X-Response-Time', `${ms}ms`);
});

//  判断是否登录
app.use(async (ctx, next) => {

    //  判断是否在请求登录接口
    if (ctx.request.path === '/loginsuccess') {
        let data = await parseData(ctx);
        console.log(data);
        ctx.session.username = "张三";
        ctx.cookies.set('token', 'password', {
            maxAge: 1000 * 60 * 60 * .6,
            httpOnly: false,
            overwrite: false
        });
        if (ctx.request.path !== '/favicon.ico') {
            console.log(ctx.request.path);
        }
        // return;
    }
    await next();
});

// response
app.use(async ctx => {
    // console.log(new Date().toLocaleTimeString());
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('../../dist/web/index.html');
});


function parseData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let str = '';
            ctx.req.on('data', (data) => {
                str += data
            });
            ctx.req.addListener('end', () => {
                resolve(parseUrl(str))
            })
        } catch (err) {
            reject(err)
        }
    });
}

function parseUrl(url) {
    let obj = {};
    let arr = url.split('&');
    arr.forEach((e, i) => {
        let tempArr = e.split('=');
        obj[tempArr[0]] = tempArr[1]
    });
    return obj
}


app.listen(3000, function () {
    console.log('监听3000端口');
});