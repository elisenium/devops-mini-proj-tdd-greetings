const greet = require('./app.js');

test('greet with given regular name in parameter', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('greet with given uppercase name in parameter', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
});