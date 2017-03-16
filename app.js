const Koa = require('koa')
    , app = new Koa()
    , router = require('koa-router')()
    , json = require('koa-json')
    , logger = require('koa-logger')
    , auth = require('./server/routes/auth');

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.on('error', (err) =>
  console.log('server error', err)
);


router.use('/auth', auth.routes());

app.use(router.routes());

app.listen(8889, () => {
  console.log('Koa is listening in 8889');
});

module.exports = app;
