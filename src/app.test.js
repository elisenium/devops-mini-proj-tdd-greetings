const greet = require('./app.js');

/* Test entered name in parameter */
test('greet with given name in parameter', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

/* Test null, undefined and empty values */
test('greet with an undefined value', () => {
    expect(greet(undefined)).toBe('Hello, my friend.');
});

test('greet with no entered value', () => {
    expect(greet()).toBe('Hello, my friend.');
});

test('greet with a null value', () => {
    expect(greet(null)).toBe('Hello, my friend.');
});

/* Test function in case of uppercase name */
test('greet with given uppercase name in parameter', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
});

/* Test multiple entered names and handle names in uppercase */
test('greet with given uppercase name and two other names in lowercase in parameter', () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
        'Hello, Amy and Charlotte. AND HELLO BRIAN !'
    );
});

test('greet with given uppercase name and two other names in lowercase in parameter', () => {
    expect(greet(['KRATOS', 'Thanathos', 'Hypnos'])).toBe(
        'Hello, Thanathos and Hypnos. AND HELLO KRATOS !'
    );
});

/* Test function with more than one name */
test('greet with two given name in parameter', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});

test('greet with several names in parameter', () => {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
        'Hello, Amy, Brian and Charlotte.'
    );
});

test('greet with several names in parameter', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'])).toBe(
        'Hello, Kratos, Thanathos and Hypnos.'
    );
});

test('greet with several names in parameter', () => {
    expect(
        greet(['Amy', 'Brian', 'Charlotte', 'Kratos', 'Thanathos', 'Hypnos'])
    ).toBe('Hello, Amy, Brian, Charlotte, Kratos, Thanathos and Hypnos.');
});

/* Test function with language feature (fr, nl, en) */
test('greet with one name in parameter and the chosen language is english', () => {
    expect(greet('Phil', 'en')).toBe('Hello, Phil.');
});

test('greet with one name in parameter and the chosen language is french', () => {
    expect(greet('Bob', 'fr')).toBe('Bonjour Bob.');
});

test('greet with one name in parameter and the chosen language is dutch', () => {
    expect(greet('Stefaan', 'nl')).toBe('Hallo Stefaan.');
});

test('greet with two given names in parameter and chosen language is french', () => {
    expect(greet(['Kratos', 'Thanathos'], 'fr')).toBe(
        'Bonjour Kratos et Thanathos.'
    );
});

test('greet with two names in parameter and the chosen language is english', () => {
    expect(greet(['Kratos', 'Thanathos'], 'en')).toBe(
        'Hello, Kratos and Thanathos.'
    );
});

test('greet with two names in parameter and the chosen language is dutch', () => {
    expect(greet(['Kratos', 'Thanathos'], 'nl')).toBe(
        'Hallo Kratos en Thanathos.'
    );
});

test('greet with three names in parameter and the chosen language is dutch', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'], 'nl')).toBe(
        'Hallo Kratos, Thanathos en Hypnos.'
    );
});

test('greet with three names in parameter and the chosen language is french', () => {
    expect(greet(['Kratos', 'Thanathos', 'Hypnos'], 'fr')).toBe(
        'Bonjour Kratos, Thanathos et Hypnos.'
    );
});

test('greet with more than three names in parameter and the chosen language is english', () => {
    expect(
        greet(
            ['Amy', 'Brian', 'Charlotte', 'Kratos', 'Thanathos', 'Hypnos'],
            'en'
        )
    ).toBe('Hello, Amy, Brian, Charlotte, Kratos, Thanathos and Hypnos.');
});

test('greet with given uppercase name and two other names in lowercase in parameter and chosen language is french', () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'], 'fr')).toBe(
        'Bonjour Amy et Charlotte. ET BONJOUR BRIAN !'
    );
});
