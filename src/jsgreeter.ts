import {Greeter} from "./greeter";

export class JavaScriptGreeter extends Greeter {
    greet(name:string):string{
        return `console.log('${super.greet(name)}')`
    }
} 

let JavaScriptGreeter1 = new JavaScriptGreeter("Bonjour!");
console.log(JavaScriptGreeter1);
console.log(JavaScriptGreeter1.greet("Tom"));

let JavaScriptGreeter2 = new JavaScriptGreeter("Heyyyoooo!");
console.log(JavaScriptGreeter2);
console.log(JavaScriptGreeter2.greet("Clete"));