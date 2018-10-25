import React from 'react'
import { renderToString } from 'react-dom/server'
import ReactDOM from 'react-dom'
import Botkit from 'botkit'

const listener = Botkit.slackbot({
  debug: true,
  stats_optout: true
})
const bot = listener
  .spawn({ token: 'your bot token' })
  .startRTM()

const setupConvo = (bot, message, convo) => {
  // convo.addMessage({
  //     text: renderToString(<SmallTalk message={message.text} />)
  //   },
  //   'start_small_talk'
  // )

  // convo.activate()
  // convo.gotoThread('start_small_talk')
}

listener.on('direct_message', (bot, message) => {
  bot.startPrivateConversation(
    message,
    (err, convo) => setupConvo(bot, message, convo)
  )
})
