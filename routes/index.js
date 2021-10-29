import { Router } from 'express'
const router = Router()

/* GET home page. */

// localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express To-Dos' })
})

export { 
  router
}
