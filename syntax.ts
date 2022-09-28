// tuple (an array with known number of elm and eml types)
let skill: [string, number] = ['programming', 5];

//Union type (either one or the other)
let a: number | string = 1;
a = 'b';


function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}