const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://KA:${password}@cluster0.dp6ss.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const usersSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const User = mongoose.model('User', usersSchema)

const user = new User({
})

user.save().then(result => {
  console.log('login details saved!')
  mongoose.connection.close()
})

/*
Diary.find({ important: true }).then(result => {
  // ...
})
*/

user.find({}).then(result => {
  result.forEach(entry => {
    console.log(entry)
  })
  mongoose.connection.close()
})