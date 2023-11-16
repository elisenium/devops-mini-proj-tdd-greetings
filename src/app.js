let greeting; //greeting variable
const languages = [ // List of languages
    { lang: 'en', greeting: 'Hello,', and: 'and', friend: 'my friend' },
    { lang: 'fr', greeting: 'Bonjour', and: 'et', friend: 'mon ami(e)' },
    { lang: 'nl', greeting: 'Hallo', and: 'en', friend: 'mijn vriend(in)' },
];
const defaultLanguage = languages.find((lang) => lang.lang === 'en'); // Set default language to English if language is not found

function greet(name, language) {
    selectedLanguage = languages.find((item) => item.lang === language) || defaultLanguage; //If there is a language set in parameter, find it. Else, set default language
    /* If name is not found, return greeting by default 'Hello, my friend'. Translations in french and dutch are possible*/
    if (
        name === undefined ||
        name === '' ||
        name === null ||
        name.length === 0
    ) {
        return `${selectedLanguage.greeting} ${selectedLanguage.friend}.`;
    }
    /* If there are two names in parameter, return greet using both names */
    if (name.length === 2) {
        greeting = `${selectedLanguage.greeting} ${name[0]} ${selectedLanguage.and} ${name[1]}.`;
        return greeting;
    }
    /* If there's a single name in parameter, greet using that name */
    if (name.length === 1 || typeof name === 'string') {
        greeting = `${selectedLanguage.greeting} ${name}`;

        if (containsUppercaseOnly(name) === true) { //If the name received is in uppercase, put everything in uppercase
            return greeting.toUpperCase() + '!';
        }
        return greeting + '.';
    }
    /*pre : array with mix of uppercase and lowercase       
      post : array with only lowercase name and a string of the uppercase name*/
    const tabLower = name.filter((name) => !containsUppercaseOnly(name));
    const string = name.find((name) => containsUppercaseOnly(name));
    if (string === undefined || string === '' || string === null) {
        return moreThanTwo(name, language);
    }
    let andHello = ((`${selectedLanguage.and} ${selectedLanguage.greeting}`).toUpperCase()); //"AND HELLO" in chosen language
    /* Removing comma at "Hello," if language is english, undefined, null or empty */
    if (language === 'en' || language === undefined || language === '' || language === null) {
        andHello = andHello.slice(0, -1);
    }
    return `${moreThanTwo(tabLower, language)} ${andHello} ${string} !`;
}
/*pre : array with lowercase name
  post : string with the correct form of sentence*/
function moreThanTwo(namesLower, language) {
    const selectedLanguage = languages.find((lang) => lang.lang === language) || defaultLanguage; //If there is a language set in parameter, find it. Else, set default language

    if (namesLower.length <= 1) {
        return `${selectedLanguage.greeting} ${namesLower.join('')}.`;
    }

    const lastTwo = namesLower.slice(-2).join(` ${selectedLanguage.and} `);
    const rest = namesLower.slice(0, -2).join(', ');

    return `${selectedLanguage.greeting} ${rest.length > 0 ? rest + ', ' : ''}${lastTwo}.`;
}

/* Check if the string only has uppercase letters */
function containsUppercaseOnly(str) {
    return /^[A-Z]+$/.test(str);
}

module.exports = greet;
