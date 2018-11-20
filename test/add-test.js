const assert = require('chai').assert
const addNumbers = require('../add')

describe('add functionality', () => {
  context('add function', () => {
    it('it can add two numbers', () => {
      assert.equal(addNumbers(7,8), 15)
    })
  })
})
