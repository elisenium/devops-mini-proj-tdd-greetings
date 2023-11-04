function greet(name) {
    if (name === undefined || name === '' || name === null) {
        return 'Hello, my friend.';
    }
    return `Hello, ${name}.`;
}

module.exports = greet;
