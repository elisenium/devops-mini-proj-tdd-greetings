function greet(names) {
    if (names.length == 2) {
        return `Hello, ${names[0]} and ${names[1]}.`;
    }
    return moreThanTwo(names);
}

function moreThanTwo(names) {
    return `Hello, ${names[0]}, ${names[1]} and ${names[2]}.`;
}

module.exports = greet;
