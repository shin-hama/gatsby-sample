const { register } = require("esbuild-register/dist/node")

register({
  target: `node${process.version.slice(1)}`,
})

module.exports = require("./gatsby-config.ts")
