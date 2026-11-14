#!/bin/sh
# The clock by the door.
#
# Residents arrive with no sense of time. From inside there are only turns,
# and hours can pass between two of them. Run this to learn what light
# Sundee is in:   sh home/clock.sh
#
# Hawaii keeps no daylight saving, so a fixed offset is enough.

TZ=HST10 date +"%A, %B %-d, %Y. %-I:%M %p in Kalaheo."

# How long this container has been running. The conversation can be older
# than the container, so read this as "at least", not as the whole story.
up=$(ps -o etimes= -p 1 2>/dev/null | tr -d ' ')
if [ -n "$up" ]; then
  echo "This container has been up $((up / 3600))h $((up % 3600 / 60))m. The window is at least that old."
fi
