import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/students
router.post("/:id/students", isLoggedIn, profilesCtrl.createStudent)

// DELETE profiles/students/:id
router.delete('/:profileId/students/:studentId', isLoggedIn, profilesCtrl.deleteStudent)

export {
  router
}