function greet(name) {

    if (name === undefined || name === '' || name === null) {
        return 'Hello, my friend.';
    }
    const helloStr = `Hello, ${name}`;

    if (containsUppercaseOnly(name) === true) {
        return helloStr.toUpperCase() + '!';
    }

    if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`;
    }
    if (name.length === 1 || typeof (name) === 'string') {
        return helloStr + '.';
    }
    return moreThanTwo(name);
};

function moreThanTwo(namesLower) {
    if (namesLower.length <= 1) {
        return `Hello, ${namesLower.join("")}.`;
    }
    const lastTwo = namesLower.slice(-2).join(" and ");
    const rest = namesLower.slice(0, -2).join(", ");

    return `Hello, ${rest.length > 0 ? rest + ", " : ""}${lastTwo}.`;
};
    


function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
