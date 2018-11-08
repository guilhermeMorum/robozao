require 'coffeescript/register'

{ msgVariables, sendMessages, stringElseRandomKey } = require '../lib/common'

livechat_department = (process.env.LIVECHAT_DEPARTMENT_ID || null )

class Teste
  constructor: (@interaction) ->
  process: (msg) =>
    console.error 'mas que merdaaaaaaaaaaaaaaaa'
    console.error @interaction
    msg.reply "torta de abóbora"

module.exports = Teste
