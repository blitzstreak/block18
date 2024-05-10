const {logIn, createAccount, googleEmail} = require("../workshop.js");

test('was logging in successful?', ()=>{
    expect(logIn("antixlag", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("antixlag", "pass")).toBeTruthy();
})

test('was the create account successful?', ()=>{
    expect(createAccount("antixlag@exampleemail.com", "")).toBeFalsy();
    expect(createAccount("", "pass")).toBeFalsy();
    expect(createAccount("", "")).toBeFalsy();
    expect(createAccount("antixlag@exampleemail.com", "pass")).toBeTruthy();
})

test('was the email verification successful?', ()=>{
    expect(googleEmail("antixlag@exampleemail.com", "")).toBeFalsy();
    expect(googleEmail("","3 2 1 5 4")).toBeFalsy();
    expect(googleEmail("", "")).toBeFalsy();
    expect(googleEmail("antixlag@exampleemail.com", "3 2 1 5 4")).toBeTruthy();
})
