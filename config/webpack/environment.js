const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.set('Environment', new webpack.EnvironmentPlugin(['RESTAURANTS_API_URL']));

module.exports = environment
