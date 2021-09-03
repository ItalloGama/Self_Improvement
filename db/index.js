const mongoose = require('mongoose')
require('dotenv').config()



let dbUrl = process.env.NODE_ENV 
=== 'production' ? process.env.MONGODB_URI 
: 'mongodb://127.0.0.1:27017/inspireDataBase'

mongoose
    .connect(dbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

// mongodb://127.0.0.1:27017/inspireDataBase
// mongodb+srv://itallo4:itallo1994@cluster0.
// .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })gqkt0.mongodb.net/inspireDataBase?retryWrites=true&w=majority
// let MONGODB_URI = 'mongodb://127.0.0.1:27017/inspireDataBase'

