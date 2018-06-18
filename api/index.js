'use strict'

const express = require('express')
const router = express.Router()
const sum = require('./sum')

router.get('/', (req, res, next) => {
  const a = req.query.a
  const b = req.query.b

  if (isNaN(a) || isNaN(b)) {
    return next(new Error('Los parametros ingresados deben ser números'))
  }

  const result = sum(a, b)

  res.status(200).send({ result })
})

module.exports = router
