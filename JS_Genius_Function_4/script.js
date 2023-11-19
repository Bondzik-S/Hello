// Function Declaration - найрідше вживаний запис ф-ції

{
	function showMessage(a, b) {
		// оголошення ф-ції, де a i b - аргументи
		console.log('Hello', a, b);
	}

	showMessage(); // виклик ф-ції
}

// Function Expression (функціональний вираз) - найчастіше використовується в роботі. Оголошення схоже на звичайне оголошення змінної.
// Локальні змінні - змінні, які оголошуються і використовуються тільки всередині певних ф-цій. Поза їх межами змінні не будуть працювати.
// Глобальні змінні - змінні, які оголошуються поза ф-ціями і можуть використовуватись по всьому документу.

{
	const userName = 'Ann'; // тут userName - глобальна змінна

	const sayHi = function () {
		let message = 'Hello, my name is Ivan'; // тут message - локальна змінна

		console.log(message + userName);
	};

	sayHi();
}

// Оператор return - повертає значення, зупиняє виконання ф-ції
{
	function sum(a, b) {
		return a + b;
	}
	let result = sum(7, 8);

	console.log(result);
}

// Передавання аргументів

{
	const testFunk = function (a, b) {
		console.log('a : ', a);
		console.log('b : ', b);
	};

	testFunk(5, 8);
}

// Кожна ф-ція, крім стрілочних, має свій псевдомасив arguments. Автоматично створений псевдомасив, який можна перетворити в звичайний та проводити з ним певні дії. Псевдомасив має обмежену кількість методів, тому їх і перетворюють в масиви.

{
	const addName = function () {
		const arg = Array.from(arguments); // перетворення псевдомасиву в масив за допомогою методу Array.from()
		console.log(arguments);
		console.log(arg);
	};

	addName(1, 3, 5);
	//addName(1, 3, 5, 55, 66);
}

// rest (...) - оператор створює автоматично масив. Синтаксис function (...назва_масиву)

{
	const addName = function (...arg) {
		console.log(arg);
	};

	addName(1, 2, 3, 4, 5, 66, 77, 88);
}

// сallback - ф-ції це ф-ції, які будуть виконані пізніше

// {
// 	function ask(question, yes, no) {
// 		if (confirm(question)) {
// 			yes();
// 		} else {
// 			no();
// 		}
// 	}

// 	function showOk() {
// 		console.log('You say ok');
// 	}

// 	function showCansel() {
// 		console.log('You say no');
// 	}

// 	ask('Yes or no?', showOk, showCansel);
// }

// HOF (High Order Function) - підвид сallback-функцій які можуть приймати або повертати як результат інші ф-ції

{
	const hello = function (name) {
		console.log(`Hello ${name}`);
	};

	// hello('Ann');

	const searchName = function (callback) {
		const name = 'Ivan';
		callback(name);
	};

	searchName(hello);
}

//

{
	function checkAge(age) {
		if (age >= 18) {
			return console.log('Hello');
		}
		return console.log('Bye');
	}

	checkAge(17);
}

//

{
	function showMovie(age) {
		if (age < 21) {
			return; // return не обовʼязково має щось повертати, він може використовуватись як просто вихід із ф-ції
		}
		return console.log('Go to movie!');
	}

	showMovie(20);
}

// стрілкові функції =>

// синтаксис стрілкової ф-ції - const test = () => {};
// в стрілкових ф-ціях немає псевдомасиву arguments

{
	const test = (arg) => {
		console.log(arg);
	};

	test('hello');
}

//

{
	const showMovie1 = (age) => {
		if (age > 21) {
			return console.log('Hello');
		}
		return console.log('Bye');
	};

	showMovie1(22);
}

// Спочатку виконуються ф-ції всередині стеку, а аж потім виходить початкова.

{
	const a = () => {
		console.log('a');
	};

	const b = () => {
		console.log('b');
	};

	const c = () => {
		console.log('c');
		a();
		b();
	};

	c(); // Результат: c, a, b
}

// Якщо є посилання на інпут, то в неймінгу треба використовувати приставку Ref
// querySelector() - обробник події (слухач), який реагує на подію (клік, відміна). Синтаксис: querySelector('назва_елементу, id_елементу, class_елементу');

const addNumber = (number) => {
	let sum = Number(number) + 10;
	return console.log(sum);
};

const numberRef = document.querySelector('input[name = "number"]'); // Якщо на сторінці декілька однакових елементів, си можемо звернутися до них за домомогою name також. Синтаксис: назва_елементу[name = "name_елементу"]

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => addNumber(numberRef.value));

console.log(numberRef.value);
