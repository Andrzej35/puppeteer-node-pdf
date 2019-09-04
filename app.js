const express = require('express')
const path = require('path')
const indexRouter = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.use('/', indexRouter)

app.listen(3000, () => console.log(`Server is running on 3000`))

module.exports = app
