const greet = require('./app.js');

test('greet with given name in parameter', () => {
    expect(greet("Elise")).toBe("Hello, Elise!");
});