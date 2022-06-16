"use strict";
var ps = require("prompt-sync");
var prompt = ps();
var name = prompt("Enter your namr : ");
console.log("Hello ${name}");
