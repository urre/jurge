# Jurge

Simple way to get your [Jekyll](https://jekyllrb.com/) website on [surge.sh](https://surge.sh/).

## Setup

Create ``.env``, and add your own settings.

    DOMAIN=coolsite.surge.sh
    SLACKURL=https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXX
    SLACKTEXT: 'Deployed http://coolsite.surge.sh!',
    SLACKCHANNEL: '#general',
    SLACKUSERNAME: 'Deployment',
    SLACKICONEMOJI: 'taco',

### Install

    npm install

### Slack

Add an Incoming WebHook to the channel you want to notify.

### Surge

Surge is very simple to get started with. [Read more](https://surge.sh/tour)

    npm install --global surge

## Deploy

    gulp deploy

Your site now lives at your domain and your Slack-team has been notified!

## Demo

[jurge.surge.sh](http://jurge.surge.sh)