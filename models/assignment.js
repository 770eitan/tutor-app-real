import mongoose from 'mongoose'

const Schema = mongoose.Schema

const assignmentSchema = new Schema({
  name: String,
  completed: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Assignment = mongoose.model('Assignment', assignmentSchema)

export {
  Assignment
}