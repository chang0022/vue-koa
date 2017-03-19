const Koa = require('koa')
    , app = new Koa()
    , router = require('koa-router')()
    , json = require('koa-json')
    , logger = require('koa-logger')
    , auth = require('./server/routes/auth')
    , api = require('./server/routes/api')
    , jwt = require('koa-jwt')
    , path = require('path')
    , serve = require('koa-static')
    , historyApiFallback = require('koa-history-api-fallback');

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err;
    }
  });
});

app.on('error', err =>
  console.log('server error', err)
);

router.use('/auth', auth.routes());
router.use('/api', jwt({secret: 'neo-chang-48956'}), api.routes());

app.use(router.routes());

app.use(historyApiFallback());
app.use(serve(path.resolve('dist')));

app.listen(8889, () => {
  console.log('Koa is listening in 8889');
});

module.exports = app;
