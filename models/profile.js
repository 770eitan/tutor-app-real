import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  students: [studentSchema]
}, {
  timestamps: true
})



const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
