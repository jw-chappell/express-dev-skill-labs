import { Router } from 'express'
import * as todosCtrl from "../controllers/todos.js"
const router = Router()

/* GET todos listing. */

// localhost:3000/todos - GET
router.get('/', todosCtrl.index)

// localhost:3000/todos/new - GET 
router.get('/new', todosCtrl.new)

// localhost:3000/todos/:id - GET 
router.get('/:id', todosCtrl.show)

// localhost:3000/todos - POST 
router.post('/', todosCtrl.create)

// localhost:3000/todos/:id - DELETE
router.delete("/:id", todosCtrl.delete)



export {
  router
}
