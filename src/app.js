function greet(names){
    if (names.length==2){
        return `Hello, ${names[0]} and ${names[1]}.`;}
    return moreThanTwo(names);
};

function moreThanTwo(names){
    let string=`Hello, `;
    for (let index = 0; index < names.length; index++) {
        if(index==names.length-2){
            string+=names[index]+" and ";
        }else{
            string+=names[index]+", ";
        }
    }
    return string.slice(0, -2) + ".";
};

module.exports = greet;
