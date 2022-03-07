import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as assignmentsCtrl from "../controllers/assignments.js"
const router = Router()


router.get('/', assignmentsCtrl.index)

router.post ('/', isLoggedIn,assignmentsCtrl.create)
router.post('/', assignmentsCtrl.create)


router.get('/:id', assignmentsCtrl.show)

router.patch('/:id/flip-completed', isLoggedIn, assignmentsCtrl.flipCompleted)
router.get('/:id/edit', isLoggedIn, assignmentsCtrl.edit)
router.put ('/:id', isLoggedIn, assignmentsCtrl.update)
router.delete("/:id", isLoggedIn, assignmentsCtrl.delete)


export {
  router

}