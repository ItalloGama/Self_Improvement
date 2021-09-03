const mongoose = require('mongoose')
require('dotenv').config()



let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb+srv://itallo4:itallo1994@cluster0.gqkt0.mongodb.net/inspireDataBase?retryWrites=true&w=majority'

mongoose
    .connect(dbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true
    })
    
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db

// mongodb://127.0.0.1:27017/inspireDataBase

// heroku config:set MONGODB_URI='mongodb+srv://itallo4:itallo1994@<cluster>.i57hr.mongodb.net/<database_name>?retryWrites=true&w=majority'
