const greet = require('./app.js');

test('greet with given uppercase name and two other names in lowercase in parameter', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN !');
});

test('greet with given uppercase name and two other names in lowercase in parameter', () => {
    expect(greet(["KRATOS", "Thanathos","Hypnos"])).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS !');
});