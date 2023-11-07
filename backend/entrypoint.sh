#!/bin/sh

node fetch_swapi/characters.js
node fetch_swapi/planets.js

node server.js
