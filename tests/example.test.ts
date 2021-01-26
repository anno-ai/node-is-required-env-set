import { isRequiredEnvSet } from '../lib'
import chai = require('chai')
const assert = chai.assert

process.env.ENV_VAR_ON = 'TEST'

describe('testReturn: isRequiredEnvSet', () => {
  it('should return true if the env is set', () => {
    const testValue = isRequiredEnvSet('node', ['ENV_VAR_ON'], false)
    assert.isTrue(testValue)
  })
  it('should return false if the env is not set', () => {
    const testValue = isRequiredEnvSet('node', ['ENV_VAR_OFF'], false)
    assert.isFalse(testValue)
  })
})
