'use strict'

exports.getGlobals = () => {
  return {
    currentServerVersion: 100,
    config: require('../config/config.json')
  }
}
