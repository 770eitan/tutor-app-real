import { Assignment } from '../models/assignment.js'

  function index(req, res) {
    console.log(req.user, "asdfadsfa")
    Assignment.find({})
    .then(assignments => {
      res.render('assignments/index', {
        assignments,
        title: "📃",
        user: req.user
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/assignments")
    })
  }

  function create(req, res) {
    req.body.owner = req.user.profile._id
    req.body.completed = !!req.body.completed
    Assignment.create(req.body)
    .then(assignment => {
      res.redirect('/assignments')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/assignments')
    })
  }

  function show(req, res) {
    Assignment.findById(req.params.id)
    .populate("owner")
    .then(assignment => {
      res.render('assignments/show', {
        assignment,
        title: "📃 show",
        user: req.user
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/assignments')
    })
  }

  function flipCompleted(req, res) {
    Assignment.findById(req.params.id)
    .then(assignment => {
      assignment.completed = !assignment.completed
      assignment.save()
      .then(()=> {
        res.redirect(`/assignments/${assignment._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/assignments')
    })
  }

  function edit(req, res) {
    Assignment.findById(req.params.id)
    .then(assignment => {
      res.render('assignments/edit', {
        assignment,
        title: "edit 📃"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/assignments')
    })
  }

  function update(req, res) {
    Assignment.findById(req.params.id)
    .then(assignment => {
      if (assignment.owner.equals(req.user.profile._id)) {
        req.body.completed = !!req.body.completed
        assignment.updateOne(req.body, {new: true})
        .then(()=> {
          res.redirect(`/assignments/${assignment._id}`)
        })
      } else {
        throw new Error ('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/assignments`)
    })
  }

  function createStudent(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.students.push(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profiles/${req.user.profile._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  }

  function deleteAssignment(req, res) {
    Assignment.findById(req.params.id)
    .then(assignment => {
      if (assignment.owner.equals(req.user.profile._id)) {
        assignment.delete()
        .then(() => {
          res.redirect("/assignments")
        })
      } else {
        throw new Error ("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log("the error:", err)
      res.redirect("/assignments")
    })
  }

export {
  index,
  create,
  show,
  flipCompleted,
  edit,
  update,
  createStudent,
  deleteAssignment
}