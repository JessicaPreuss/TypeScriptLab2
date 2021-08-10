import {Greeter} from "../src/greeter";

describe("Greeter", ()=> {
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let greeter1 = new Greeter ("Greetings to you");
        //Assert
        expect(greeter1.greet("Gary")).toBe("Greetings to you, Gary!");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let greeter1 = new Greeter ("Hello, nice to meet you");
        //Assert
        expect(greeter1.greet("Henry")).toBe("Hello, nice to meet you, Henry!");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let greeter1 = new Greeter ("Hey there");
        //Assert
        expect(greeter1.greet("Herbert")).toBe("Hey there, Herbert!");
    })
}) 
    
