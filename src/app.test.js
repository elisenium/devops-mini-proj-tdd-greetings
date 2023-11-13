const greet = require('./app.js');

/* Test null, undefined and empty values */
test('greet with given name in parameter', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('greet with an undefined value', () => {
    expect(greet(undefined)).toBe('Hello, my friend.');
});

test('greet with no entered value', () => {
    expect(greet()).toBe('Hello, my friend.');
});

test('greet with a null value', () => {
    expect(greet(null)).toBe('Hello, my friend.');
});

/* Test function in case of uppercase name */
test('greet with given regular name in parameter', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('greet with given uppercase name in parameter', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
});
