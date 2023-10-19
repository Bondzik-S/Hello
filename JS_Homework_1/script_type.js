// 3) Самостійно порівняти за допомогою == і ===  різні типи данних і розглянути результат
// true
// false
// number
// string
// undefined
// NaN
// Infinity

console.log('\n\n');

console.log('true == false', true == false);
console.log('true === false', true === false);
console.log('true == number', true == 3);
console.log('true === number', true === 3);
console.log('true == string', true == 'string');
console.log('true === string', true === 'string');
console.log('true == undefined', true == undefined);
console.log('true === undefined', true === undefined);
console.log('true == NaN', true == NaN);
console.log('true === NaN', true === NaN);
console.log('true == Infinity', true == Infinity);
console.log('true === Infinity', true === Infinity);
console.log('true == true', true == true);
console.log('true === true', true === true);

console.log('\n\n');

console.log('false == false', false == false);
console.log('false === false', false === false);
console.log('false == number', false == 3);
console.log('false === number', false === 3);
console.log('false == string', false == "string");
console.log('false === string', false === "string");
console.log('false == undefined', false == undefined);
console.log('false === undefined', false === undefined);
console.log('false == NaN', false == NaN);
console.log('false === NaN', false === NaN);
console.log('false == Infinity', false == Infinity);
console.log('false === Infinity', false === Infinity);

console.log('\n\n');

console.log('number == number', 2 == 4);
console.log('number === number', 2 === 4);
console.log('number == string', 2 == '2');
console.log('number === string', 2 === '2');
console.log('number == undefined', 2 == undefined);
console.log('number === undefined', 2 === undefined);
console.log('number == NaN', 2 == NaN);
console.log('number === NaN', 2 === NaN);
console.log('number == Infinity', 2 == Infinity);
console.log('number === Infinity', 2 === Infinity);

console.log('\n\n');

console.log('string == string', 'string' == 'string');
console.log('string === string', 'string' === 'string');
console.log('string == undefined', 'string' == undefined);
console.log('string === undefined', 'string' === undefined);
console.log('string == NaN', 'string' == NaN);
console.log('string === NaN', 'string' === NaN);
console.log('string == Infinity', 'string' == Infinity);
console.log('string === Infinity', 'string' === Infinity);

console.log('\n\n');

console.log('undefined == undefined', undefined == undefined);
console.log('undefined === undefined', undefined === undefined);
console.log('undefined == NaN', undefined == NaN);
console.log('undefined === NaN', undefined === NaN);
console.log('undefined == Infinity', undefined == Infinity);
console.log('undefined === Infinity', undefined === Infinity);

console.log('\n\n');

console.log('NaN == NaN', NaN == NaN);
console.log('NaN === NaN', NaN === NaN);
console.log('NaN == Infinity', NaN == Infinity);
console.log('NaN === Infinity', NaN === Infinity);

console.log('\n\n');

console.log('Infinity == Infinity', Infinity == Infinity);
console.log('Infinity === Infinity', Infinity === Infinity);