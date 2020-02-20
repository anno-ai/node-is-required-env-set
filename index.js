const checkEnv = require('check-env')

module.exports = {
    /**
     * 
     * @param {String} name The name of the service you are checking environment variables for
     * @param {Array} vars Array of variable names to check if set
     * @param {Bool} fatal If true, function will throw error instead of printing
     * @param {String} type The type of service that you are checking environment variables for
     */
    isRequiredEnvSet: function (name, vars = [], fatal = false, type = 'plugin') {
        try {
          checkEnv(vars)
          return true
        } catch (err) {
          const _err = `${name} ${type} requires the following environment variables to be set: ${vars.join(', ')}`
          if (fatal) {
            throw new Error(_err)
          }
          console.log(_err)
          return false
        }
    }
}