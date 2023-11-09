const greet = require('./app.js');

test('greet with given name in parameter', () => {
    expect(greet('Jill','Jane')).toBe('Hello, Jill and Jane.');
});
