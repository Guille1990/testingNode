'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('server:base')

const api = require('./api')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  res.status(500).send({error: err.message})
})

if (!module.parent) {
  app.listen(5000, () => {
    debug(`Server running in port 5000`)
  })
}

module.exports = app
