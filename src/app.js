function greet(name) {

    if (name === undefined || name === '' || name === null || name.length === 0) {

        return 'Hello, my friend.';
    }
    const helloStr = `Hello, ${name}`;

    if (name.length === 1 || typeof (name) === 'string') {
        if (containsUppercaseOnly(name) === true) {
            return helloStr.toUpperCase() + '!';
        }
        return helloStr + '.';
    }
  
    if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`;
    }

    const tabLower = name.filter(name => !containsUppercaseOnly(name));
    const string = name.find(name => containsUppercaseOnly(name));
    if(string === undefined || string === '' || string === null){
      return moreThanTwo(name);
    }
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
