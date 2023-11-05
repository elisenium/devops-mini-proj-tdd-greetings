function greet(name) {
    const helloStr = `Hello, ${name}`;
    if (containsUppercaseOnly(name) === true) {
        return helloStr.toUpperCase() + '!';
    }
    return helloStr + '.';
}

function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
