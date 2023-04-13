const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const abilitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  is_hidden: Boolean,
  pokemon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon'
  }
})

const Abilities = mongoose.model('Abilities', abilitiesSchema)

abilitiesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Abilities', abilitiesSchema)