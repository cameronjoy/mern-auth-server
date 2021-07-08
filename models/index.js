// require mongoose package
const mongoose = require('mongoose')
require('dotenv').config()

// connection function
const connect = () => {
    const MONGODB_URI = process.env.MONGODB_URI


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`MongoDB connection at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log('uh oh spaghettio lmao 🤡')
    console.log(err)
})
}

// export connection functions and models
module.exports = {
    connect,
    User: mongoose.model('user', require('./User.js'))
}