#!/usr/bin/env node
'use strict';

// https://stackoverflow.com/questions/24082810/binary-file-in-npm-package

const fs = require("fs");
const path = require("path");

function parseTokens(readFile, writeFile, token) {
  const writePath = path.resolve(__dirname, "..", "tokens");

  fs.readFile(
    path.resolve(__dirname, "..", "styles", readFile),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      if (!fs.existsSync(writePath)) {
        fs.mkdirSync(writePath, { recursive: true });
      }

      const regex = `--${token}-[\\w-\\d:\\s#;][^\\t\\n]+`;

      console.log(regex, process.argv);

      parseData(regex, path.join(writePath, writeFile), data);
    }
  );
}

function parseMatchedData(data) {
  const obj = {};
  data.forEach((item) => {
    const [name, value] = item[0].replace(";", "").split(": ");

    if (!obj[name]) {
      obj[name] = value;
    }
  });

  return obj;
}

function parseData(pattern, write, data) {
  const regex = new RegExp(pattern, "g");
  const matched = [...data.matchAll(regex)];
  const parsed = parseMatchedData(matched);

  fs.writeFile(path.resolve(`${write}.json`), JSON.stringify(parsed), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log("Success! 🎉");
  });
}

// https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program
const args = process.argv.slice(2);
parseTokens([...args]);
