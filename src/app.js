function greet(name) {
    if (containsUppercaseOnly(name) === true) {
        return `HELLO, ${name}!`;
    }
    return `Hello, ${name}.`;
}

function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
