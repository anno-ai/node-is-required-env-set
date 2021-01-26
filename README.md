![Node.js Unit Tests](https://github.com/anno-ai/node-is-required-env-set/workflows/Node.js%20Unit%20Tests/badge.svg)

![NPM Audit Dependencies](https://github.com/anno-ai/node-is-required-env-set/workflows/NPM%20Audit%20Dependencies/badge.svg)

# node-is-required-env-set

Helper function to check if required environment variables are set

# Usage
```
const { isRequiredEnvSet } = require('./index.js')

isRequiredEnvSet('Shell', ['SHELL'])
```