#!/bin/bash

# Settings
USER="Deployment"
CHANNEL="#hemmafonster"
TEXT="deployed http://hemmafonster.surge.sh"
WEBHOOKURL="https://hooks.slack.com/services/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"
SLACK_AUTHOR=""
SLACK_ICON=""

# Read env file
file=".env"
while IFS= read -r line
do
  if [[ $line =~ SLACK_AUTHOR ]] ; then
  	SLACK_AUTHOR=`echo $line | sed 's/[^"]*"\([^"]*\)".*/\1/' `
  fi
  if [[ $line =~ SLACK_ICON ]] ; then
  	SLACK_ICON=`echo $line | sed 's/[^"]*"\([^"]*\)".*/\1/' `
  fi
done <"$file"

# Escape as JSON friendly TEXT
escapedText=$(echo $TEXT | sed 's/"/\"/g' | sed "s/'/\'/g" )

# JSON to send
json="{\"channel\": \"$CHANNEL\", \"username\":\"$USER\", \"icon_emoji\":\":syringe:\", \"attachments\":[{\"color\":\"good\" , \"author_name\":\"$SLACK_AUTHOR\" , \"author_icon\":\"$SLACK_ICON\" , \"color\":\"good\" ,\"text\": \"$escapedText\"}]}"

# Post to Slack
curl -s -d "payload=$json" "$WEBHOOKURL"
