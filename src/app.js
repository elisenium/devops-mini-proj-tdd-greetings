function greet(name, language) {
    let greeting;
    const languages = [
        { lang: 'en', greeting: 'Hello,', and: 'and' },
        { lang: 'fr', greeting: 'Bonjour', and: 'et' },
        { lang: 'nl', greeting: 'Hallo', and: 'en' },
    ];
    const default_language = languages[0];

    if (
        name === undefined ||
        name === '' ||
        name === null ||
        name.length === 0
    ) {
        return 'Hello, my friend.';
    }

    if (name.length == 2) {
        if (language === null || language === '' || language === undefined) {
            greeting = `${default_language.greeting} ${name[0]} ${default_language.and} ${name[1]}.`;
        }
        languages.forEach((item) => {
            if (language === item.lang) {
                greeting = `${item.greeting} ${name[0]} ${item.and} ${name[1]}.`;
            }
        });
        return greeting;
    }

    if (name.length === 1 || typeof name === 'string') {
        if (language === null || language === '' || language === undefined) {
            greeting = `${default_language.greeting} ${name}`;
        }
        languages.forEach((item) => {
            if (language === item.lang) {
                greeting = `${item.greeting} ${name}`;
            }
        });
        if (containsUppercaseOnly(name) === true) {
            return greeting.toUpperCase() + '!';
        }
        return greeting + '.';
    }

    const tabLower = name.filter((name) => !containsUppercaseOnly(name));
    const string = name.find((name) => containsUppercaseOnly(name));
    if (string === undefined || string === '' || string === null) {
        return moreThanTwo(name);
    }
    return `${moreThanTwo(tabLower)} AND HELLO ${string} !`;
}

function moreThanTwo(namesLower) {
    if (namesLower.length <= 1) {
        return `Hello, ${namesLower.join('')}.`;
    }
    const lastTwo = namesLower.slice(-2).join(' and ');
    const rest = namesLower.slice(0, -2).join(', ');

    return `Hello, ${rest.length > 0 ? rest + ', ' : ''}${lastTwo}.`;
}

function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
