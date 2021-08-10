import {HtmlGreeter} from "../src/htmlgreeter";

describe("HtmlGreeter", ()=> {
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter ("Greetings to you");
        //Assert
        expect(htmlgreeter.greet("Gary")).toBe("<h1>Greetings to you, Gary!</h1>");
    })
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter   ("Hello, nice to meet you");
        //Assert
        expect(htmlgreeter.greet("Henry")).toBe("<h1>Hello, nice to meet you, Henry!</h1>");
    })
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter   ("Hey there");
        //Assert
        expect(htmlgreeter.greet("Herbert")).toBe("<h1>Hey there, Herbert!</h1>");
        expect(htmlgreeter.tagName).toBe("h1");
    })
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter ("Greetings to you","p");
        //Assert
        expect(htmlgreeter.greet("Gary")).toBe("<p>Greetings to you, Gary!</p>");
        expect(htmlgreeter.tagName).toBe("p");
    })
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter   ("Hello, nice to meet you","span");
        //Assert
        expect(htmlgreeter.greet("Henry")).toBe("<span>Hello, nice to meet you, Henry!</span>");
    })
    test( "Testing different greetings, names, and tagnames", ()=>{
        //Arrage
        let htmlgreeter = new HtmlGreeter   ("Hey there","li");
        //Assert
        expect(htmlgreeter.greet("Herbert")).toBe("<li>Hey there, Herbert!</li>");
        expect(htmlgreeter.tagName).toBe("li");
    })
}) 