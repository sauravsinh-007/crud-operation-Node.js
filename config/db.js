const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/crudOperation'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('connected to MomgoDB Server')

})

db.on('error', (err) => {
    console.log('MongoDB Connection Error', err)
})

db.on('disconnected', () => {
    console.log('Disconnected to MOngoDB server')
})

module.exports = db