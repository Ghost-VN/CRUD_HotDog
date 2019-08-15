const Router = require('koa-router')
const router = new Router()
const Hotdog = require('../models/Hotdog')

router.get('/api/hotdogs', async ctx => {
  await Hotdog.findAll()
    .then(hotdogs => {
      ctx.body = hotdogs
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })
})



router.get('/api/hotdog/:id', async ctx => {
  await Hotdog.findOne({
    where: {
      id: ctx.params.id
    }
  })
    .then(hotdog => {
      if (hotdog) {
        ctx.body = hotdog
      } else {
        ctx.body = 'HotDog does not exist'
      }
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })
})



router.post('/api/hotdog', async ctx => {
  if (!ctx.request.body.HotDogName) {
    ctx.body = {
      error: 'Bad Data'
    }
  } else {
    await Hotdog.create(ctx.request.body)
      .then(data => {
        ctx.body = data
      })
      .catch(err => {
        ctx.body = 'error: ' + err
      })
  }
})



router.delete('/api/hotdog/:id', async ctx => {
  await Hotdog.destroy({
    where: {
      id: ctx.params.id
    }
  })
    .then(() => {
      ctx.body = { status: 'Hot-Dog Deleted!' }
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })
})



router.put('/api/hotdog/:id', async ctx => {
  if (!ctx.request.body.HotDogName) {
    ctx.body = {
      error: 'Bad Data'
    }
  } else {
    await Hotdog.update(
      { HotDogName: ctx.request.body.HotDogName },
      { where: { id: ctx.params.id } }
    )
      .then(() => {
        ctx.body = { status: 'Hotdog Updated!' }
      })
      .catch(err => {
        ctx.body = 'error: ' + err
      })
  }
})

module.exports = router


