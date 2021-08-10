import {Greeter} from "./greeter";
import {JavaScriptGreeter} from "./jsgreeter";
import {LoudGreeter} from "./loudgreeter";
import {HtmlGreeter} from "./htmlgreeter";

import PromptSync from "prompt-sync";
// prompt example
let calling = PromptSync();
let yourName = calling("What is your name?");
console.log("Oh! nice to meet you" + yourName);


let namePrompt = PromptSync();
let userName = namePrompt("What is your name?")
let greetingPrompt = PromptSync();
let userGreeting = greetingPrompt("Enter a greeting here")

//Greeting class (parent)
let greeter = new Greeter (userGreeting);
console.log(greeter.greet(userName));

//JavaScriptGreeter class (child)
let jsgreeter = new JavaScriptGreeter(userGreeting);
console.log(jsgreeter.greet(userName));

//LoudGreeter class (child)
let loudgreeter = new LoudGreeter(userGreeting);
console.log(loudgreeter.greet(userName));


