function greet(names){
    if (names.length==2){
        return `Hello, ${names[0]} and ${names[1]}.`;}
    return moreThanTwo(names);
};

function moreThanTwo(names){
    if (namesLower.length <= 1) {
        return `Hello, ${namesLower.join("")}.`;
    }
    const lastTwo = namesLower.slice(-2).join(" and ");
    const rest = namesLower.slice(0, -2).join(", ");

    return `Hello, ${rest.length > 0 ? rest + ", " : ""}${lastTwo}.`;
};

module.exports = greet;
