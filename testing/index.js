'use strict'

const test = require('ava')
const request = require('supertest')
const server = require('../')
const debug = require('debug')('server:testing')

test.serial.cb('/api', t => {
  request(server)
    .get('/api?a=5&b=7')
    .expect(200)
    .end((err, res) => {
      if (err) return debug(err.message)
      t.deepEqual(12, res.body.result)
      t.end()
    })
})

test.serial.cb('/api not number', t => {
  request(server)
    .get('/api?a=5&b=b')
    .expect(500)
    .end((err, res) => {
      if (err) return debug(err.message)
      t.deepEqual('Los parametros ingresados deben ser números', res.body.error)
      t.end()
    })
})
