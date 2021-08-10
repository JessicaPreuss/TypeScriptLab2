import {JavaScriptGreeter} from "../src/jsgreeter";

describe("JavaScriptGreeter", ()=> {
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let jsgreeter1 = new JavaScriptGreeter ("Greetings to you");
        //Assert
        expect(jsgreeter1.greet("Gary")).toBe("console.log('Greetings to you, Gary!')");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let jsgreeter1 = new JavaScriptGreeter  ("Hello, nice to meet you");
        //Assert
        expect(jsgreeter1.greet("Henry")).toBe("console.log('Hello, nice to meet you, Henry!')");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let jsgreeter1 = new JavaScriptGreeter  ("Hey there");
        //Assert
        expect(jsgreeter1.greet("Herbert")).toBe("console.log('Hey there, Herbert!')");
    })
}) 