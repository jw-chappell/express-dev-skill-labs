import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as todosRouter } from './routes/todos.js'

// set up app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mounted routers

// localhost:3000/ -> indexRouter
app.use('/', indexRouter)
// localhost:3000/todos -> todosRouter
app.use('/todos', todosRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('Hello SEI!')
  req.time = new Date().toLocaleTimeString()
  next()
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
