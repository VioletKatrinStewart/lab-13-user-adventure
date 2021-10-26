import { generateUser, setUser } from '../utils/utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 
        completed: {},
        candy: 0,
        hp: 3,
        name: 'Violet',
        costume: 'vampire',
    };

    const formData = new FormData();
    formData.set('name', 'Violet');
    formData.set('costume', 'vampire');

    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    localStorage.removeItem('USER');
    const userObject = { 
        completed: {},
        candy: 0,
        hp: 3,
        name: 'Violet',
        costume: 'vampire',
    };

    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});
