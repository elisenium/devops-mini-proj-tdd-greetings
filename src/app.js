function greet(names) {
    const tabLower = names.filter(name => !containsUppercaseOnly(name));
    const string = names.find(name => containsUppercaseOnly(name));

    return `${moreThanTwo(tabLower)} AND HELLO ${string} !`;
}

function moreThanTwo(namesLower) {
    if (namesLower.length <= 1) {
        return `Hello, ${namesLower.join("")}.`;
    }
    const lastTwo = namesLower.slice(-2).join(" and ");
    const rest = namesLower.slice(0, -2).join(", ");

    return `Hello, ${rest.length > 0 ? rest + ", " : ""}${lastTwo}.`;
}

function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
