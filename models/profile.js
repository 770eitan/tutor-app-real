import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
   name: String,
   age: Number,
   favoriteSubject: String
}, {
  timestamps: true,
})

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
