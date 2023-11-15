let greeting;
const languages = [
    { lang: 'en', greeting: 'Hello,', and: 'and' },
    { lang: 'fr', greeting: 'Bonjour', and: 'et' },
    { lang: 'nl', greeting: 'Hallo', and: 'en' },
];
const defaultLanguage = languages.find((lang) => lang.lang === 'en'); // Set default language to English if language is not found

function greet(name, language) {
    
    if (
        name === undefined ||
        name === '' ||
        name === null ||
        name.length === 0
    ) {
        return 'Hello, my friend.';
    }

    if (name.length == 2) {

        if (language !== null && language !== '' && language !== undefined) {
            selectedLanguage = languages.find((item) => item.lang === language) || default_language;
            greeting = `${selectedLanguage.greeting} ${name[0]} ${selectedLanguage.and} ${name[1]}.`;
        } else {
            greeting = `${defaultLanguage.greeting} ${name[0]} ${defaultLanguage.and} ${name[1]}.`;
        }
        return greeting;
    }

    if (name.length === 1 || typeof name === 'string') {
        if (language === null || language === '' || language === undefined) {
            greeting = `${defaultLanguage.greeting} ${name}`;
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
        return moreThanTwo(name, language);
    }
    return `${moreThanTwo(tabLower, language)} AND HELLO ${string} !`;
}

function moreThanTwo(namesLower, language) {

    const selectedLanguage = languages.find((lang) => lang.lang === language) || defaultLanguage;

    if (namesLower.length <= 1) {
        return `${selectedLanguage.greeting} ${namesLower.join('')}.`;
    }

    const lastTwo = namesLower.slice(-2).join(` ${selectedLanguage.and} `);
    const rest = namesLower.slice(0, -2).join(', ');

    return `${selectedLanguage.greeting} ${rest.length > 0 ? rest + ', ' : ''}${lastTwo}.`;
}

module.exports = moreThanTwo;


module.exports = moreThanTwo;


function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
