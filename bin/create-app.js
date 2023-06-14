#! /usr/bin/env node

'use strict';

const path = require('path');
const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (error) => {
      console.log('\x1b[31m', error, '\x1b[0m');
    };
  }
}

if (process.argv.length < 3) {
  console.log('\x1b[31m', 'Hey! Looks like you missed something! Please provide a name to your application.');
  console.log('For example:');
  console.log('npx create-next-saga-persist-app my-app', '\x1b[0m');
  process.exit(1);
}

const ownPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(ownPath, folderName);
const repo = 'https://github.com/rishav4101/create-next-saga-persist-app.git';

try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      '\x1b[31m',
      `Oops! The folder/file ${appName} already exist in the current directory. Please provide another name!.`,
      '\x1b[0m'
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function setup() {
  try {
    console.log('\x1b[33m', 'Downloading next-saga-persist-app...Just a minute...', '\x1b[0m');
    await runCmd(`git clone --depth 1 ${repo} ${folderName}`);

    process.chdir(appPath);

    console.log('\x1b[34m', 'Installing dependencies...', '\x1b[0m');

    fs.unlinkSync(path.join(appPath, 'package.json'));
    buildPackageJson(folderName);

    await runCmd('npm install');
    console.log();

    await runCmd('npx rimraf ./.git');

    fs.unlinkSync(path.join(appPath, 'LICENSE'));
    fs.rmdirSync(path.join(appPath, 'bin'), { recursive: true });
    

    console.log(
      '\x1b[32m',
      'The installation is done!',
      '\x1b[0m'
    );
    console.log();
    console.log(
        '\x1b[32m',
        '---- Congratulations :) ----',
        '\x1b[0m'
      );

    console.log('\x1b[34m', 'You can start by typing:');
    console.log(`    cd ${folderName}`);
    console.log('    npm run dev', '\x1b[0m');
    console.log();
    console.log('Do Check README.md for more informations.');
    console.log();
  } catch (error) {
    console.log(error);
  }
}

setup();

function buildPackageJson(folderName) {

  const newPackage = {
    "name": folderName,
    "version": '1.0.0',
    "description": '',
    "author": '',
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "test": "echo \"No test specified\""
      },
      "dependencies": {
        "next": "11.0.1",
        "next-redux-wrapper": "^7.0.2",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-redux": "^7.2.4",
        "redux-persist": "^6.0.0",
        "redux-saga": "^1.1.3",
      },
      "devDependencies": {
        "eslint": "7.29.0",
        "eslint-config-next": "11.0.1"
      }
  };

  fs.writeFileSync(
    `${process.cwd()}/package.json`,
    JSON.stringify(newPackage, null, 2),
    'utf8'
  );
}