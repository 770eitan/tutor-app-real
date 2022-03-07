import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

router.post('/:id/students', isLoggedIn, profilesCtrl.createStudent)



router.get('/', isLoggedIn, profilesCtrl.index)
router.get("/:id", isLoggedIn, profilesCtrl.show)

router.post('/:id/students', isLoggedIn, profilesCtrl.createStudent)

export {
  router
}