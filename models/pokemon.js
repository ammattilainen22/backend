const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    minlength: 1,
    required: true
  },
  name: {
    type: String,
    minlength: 1,
    required: true
  },
  height: {
    type: Number,
    minlength: 1,
    required: true
  },
  weight: {
    type: Number,
    minlength: 1,
    required: true
  },
  xp: {
    type: Number,
    minlength: 1,
    required: true
  },
  image_url: {
    type: String,
    minlength: 1,
    required: true
  },
  pokemon_url: {
    type: String,
    minlength: 1,
    required: true
  },
  abilities: [{
    name: mongoose.Schema.Types.ObjectId,
    ref: 'Abilities'
  }],
  },
)

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

pokemonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)