const greet = require('./app.js');

test('greet with given name in parameter', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('greet with an undefined value', () => {
    expect(greet(undefined)).toBe("Hello, my friend.");
});

test('greet with no entered value', () => {
    expect(greet()).toBe("Hello, my friend.");
});