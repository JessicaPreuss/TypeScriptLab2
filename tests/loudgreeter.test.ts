import {LoudGreeter} from "../src/loudgreeter";

describe("LoudGreeter", ()=> {
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let loudgreeter = new LoudGreeter ("Greetings to you");
        //Assert
        expect(loudgreeter.greet("Gary")).toBe("Greetings to you, Gary!!");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let loudgreeter = new LoudGreeter   ("Hello, nice to meet you");
        //Assert
        expect(loudgreeter.greet("Henry")).toBe("Hello, nice to meet you, Henry!!");
    })
    test( "Testing different greetings and names", ()=>{
        //Arrage
        let loudgreeter = new LoudGreeter   ("Hey there");
        //Assert
        expect(loudgreeter.greet("Herbert")).toBe("Hey there, Herbert!!");
    })
    test( "Test calling addVolume", ()=>{
        //Arrage
        let loudgreeter = new LoudGreeter   ("Hello, nice to meet you");
        //Act
        loudgreeter.addVolume();
        //Assert
        expect(loudgreeter.greet("Henry")).toBe("Hello, nice to meet you, Henry!!!");
    })
    test( "Tests calling addVolume", ()=>{
        //Arrage
        let loudgreeter = new LoudGreeter   ("Hey there");
        //Act
        loudgreeter.addVolume();
        loudgreeter.addVolume();
        loudgreeter.addVolume();
        //Assert
        expect(loudgreeter.greet("Herbert")).toBe("Hey there, Herbert!!!!!");
    })
}) 