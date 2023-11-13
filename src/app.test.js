const greet = require('./app.js');

test('greet with two given name in parameter', () => {
    expect(greet(['Jill','Jane'])).toBe('Hello, Jill and Jane.');
});

test('greet with several names in parameter', () => {
    expect(greet(['Amy','Brian','Charlotte'])).toBe('Hello, Amy, Brian and Charlotte.');
});

test('greet with several names in parameter', () => {
    expect(greet(['Kratos', 'Thanathos','Hypnos'])).toBe('Hello, Kratos, Thanathos and Hypnos.');
});

test('greet with several names in parameter', () => {
    expect(greet(['Amy','Brian','Charlotte','Kratos', 'Thanathos','Hypnos'])).toBe('Hello, Amy, Brian, Charlotte, Kratos, Thanathos and Hypnos.');
});