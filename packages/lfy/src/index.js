#!/usr/bin/env node

import minimist from 'minimist';
import { chalk } from 'zx';
import fy from './fy.js';

const args = minimist(process.argv.slice(2));

const { l: type, _: query } = args;
try {
  const data = await fy(query.join(' '), type);
  console.log(chalk.green(data));
} catch (error) {
  console.log(chalk.blue(error));
}
