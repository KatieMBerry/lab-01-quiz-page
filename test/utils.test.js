// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { translateToAYes } from '../translateToAYes.js';

const test = QUnit.test;

test('translateToAYes should take in a yes-like input and return true', (expect) => {
    const yes = 'yaaa';
    const expected = true;

    const actual = translateToAYes(yes);

    expect.equal(expected, actual);
});

test('translateToAYes should take in a no-like input and return false', (expect) => {
    const no = 'nahhhh';
    const expected = false;

    const actual = translateToAYes(no);

    expect.equal(expected, actual);
});
