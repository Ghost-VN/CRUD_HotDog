const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-body')

const hotdogs = require('./routes/apiCRUD')

app.use(bodyParser())
app.use(hotdogs.routes())

app.listen(5000, () => {
  console.log('Server running at port 5000')
})
