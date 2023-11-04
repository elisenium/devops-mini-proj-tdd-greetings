console.log('Hello World');

function greet(name) {
    if (name === undefined) {
        return 'Hello, my friend.';
    }
    return `Hello, ${name}.`;
}

module.exports = greet;