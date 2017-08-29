'use strict'

var async = require('async')
var webpage = require('webpage')

var urls = [
  'https://allizom.org',
  'http://example.com'
]

async.eachSeries(urls, function (url, callback) {
  try {
    var page = webpage.create()
    page.open(url, function (status) {
      console.log('Opening url: ' + url)
      if (status !== 'success') {
        console.log('error')
        throw (status)
      }
      page.render(url.replace('://', '-') + '.png')
      callback()
    })
  } catch (err) { /* do nothing */ }
}, function (err) {
  if (err) {
    console.log('in err: ' + err)
  }
  phantom.exit()
})
