# Jurge

Simple way to deploy a [Jekyll](https://jekyllrb.com/) site on [Surge.sh](https://surge.sh/)

## Setup

Clone or downlad this repo to get started. Don't forget to remove my Google Analytics tracking code from `_includes/head.html`.

Create an ``.env``, and add your own settings.

    DOMAIN=coolsite.surge.sh

Make sure you have [Jekyll](http://jekyllrb.com/docs/installation/) and [NodeJS](https://nodejs.org/en/) installed on your computer.

### Install

    npm install

### Surge

Surge is very simple to get started with. [Read more](https://surge.sh/tour)

    npm install --g surge

### Slack

Want to notify your Slack Team? 👫. Just add an Incoming WebHook to the channel you want to notify.

Add this to your `.env`

    SLACKURL=https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXX
    SLACKTEXT: 'Deployed http://mycoolsite.surge.sh!',
    SLACKCHANNEL: '#general',
    SLACKUSERNAME: 'Deployment',
    SLACKICONEMOJI: ':taco:',

## Deploy

    gulp deploy

Your site now lives at your domain and your Slack-team has been notified!

![](https://dl.dropboxusercontent.com/u/1162759/dump_2016-02-06_11-55-28.png)

## Demo

[jurge.surge.sh](http://jurge.surge.sh)

## Can I use my own domain?

Cool, Surge [supports this](https://surge.sh/help/adding-a-custom-domain) out of the box.

## License

MIT © [Urban Sandén](http://twitter.com/urre)