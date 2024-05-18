#!/usr/bin/env node

// import { $ } from 'zx';
// const args = require('minimist')(process.argv.slice(2));

let branch = await $`git branch --show-current`;
console.log(`Current git branch is ${branch}`);
