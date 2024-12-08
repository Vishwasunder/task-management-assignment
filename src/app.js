const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/taskRoutes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
app.use(bodyParser.json())
app.use('/tasks', taskRoutes)
app.use(errorHandler)

module.exports = app
