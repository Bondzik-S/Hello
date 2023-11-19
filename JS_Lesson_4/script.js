// Функшн декларейшн, функшн експрешн різниця і тд
// CallBack - це

// Задача 1. Написати програму, яка буде приймати числа від 1 до 7 і виводити відповідний день тижня.

// {
//     let quest = prompt('Введіть число від 1 до 7','');
//     function week(day){
//         switch (day){
//             case '1': return 'Понеділок';
//             case '2': return 'Вівторок';
//             case '3': return 'Середа';
//             case '4': return 'Четвер';
//             case '5': return 'Пʼятниця';
//             case '6': return 'Субота';
//             case '7': return 'Неділя';
//             default: console.error('Упс, виникла помилка');
//         }
//     }

//     console.log(week(quest));
// }

// Задача 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.

{
	let astr = 'var-text-hello';

	const trem = (str) => {
		// Стрілкова ф-ція
		let newAstr = '';
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '_') {
				continue;
			}
			newAstr += str[i];
			// console.log(newAstr);
		}
	};

	trem(astr);
}

{
	let str = 'var_text_hello';
	str.length;

	const fn1 = (functionStr) => {
		const arr = functionStr.split('_'); // Розділяє елементи на масив за нижніми підкресленнями, також можливо просто всю змінну зробити масивом, або кожен символ змінної (.split(''))
		console.log(str);

		const newArr = arr.map(function (element) {
			const s = element[0].toUpperCase();
			const newStr = s + element.substr(1);
			return newStr;
		});

		console.log(newArr.join(''));
	};

	fn1(str);
}

// Задача 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу + зробити перевірку чи цей масив є масивом і чи він на 10 елементів.

{
	var arr = Array(10);

	function showArr() {
		// Початок перевірки / метод isArray()
		if (Array.isArray(arr) && arr.length === 10) {
			for (let i = 0; i < 10; i++) {
				arr[i] = 'x';
			}
			console.log('Це масив на 10 елементів.');
		} else {
			return console.log('Це не масив на 10 елементів.');
		}
		console.log(arr);
	}

	showArr();
}

// Задача 4. Створіть масив на 50 елементів і заповніть кожен елемент його номером, не використовуючи цикли, виведіть кожен непарний елемент у параграфі, а парний у діві.

// {
// 	var arr = Array(50);
// 	// for (let i = 0; i < 50; i++) {
// 	// 	arr[i] = i;
// 	// }
// 	// console.log(arr);

// 	function getArr() {
// 		if (Array.isArray(arr)) {
// 			for (let i = 0; i < arr.length; i++) {
// 				arr[i] = i + 1;
// 				// парні
// 				if (arr[i] % 2 === 0) {
// 					document.write(`<div>${i}</div>`);
// 				} else {
// 					// не парні
// 					document.write(`<p>${i}</p>`);
// 				}
// 			}

// 			console.log('Це масив.');
// 		} else {
// 			return console.log('Це не масив.');
// 		}
// 		console.log(arr);
// 	}

// 	getArr();
// }

// Задача 5. Якщо змінна а більша нуля - то в ggg запишемо ф-цію, яка виводить один !, а інакше запишемо ф-цію, яка виводить два !.

{
	var a = 10;
	var ggg;

	if (a > 0) {
		ggg = function () {
			console.log('!');
		};
	} else {
		ggg = function () {
			console.log('!!');
		};
	}

	ggg();
}

// Задача 6. Використовуючи CallBack function, створіть калькулятор, який буде від користувача приймати 2 числа і знак арифметичної операції. При введенні не числа, або при розділі на 0, виводити помилку.

{
	var getFirstNumb;
	var getSecondNumb;
	var getOperation;

	function getInformation(fn1, fn2) {
		getFirstNumb = parseFloat(prompt('Введіть перше число'));
		getSecondNumb = parseFloat(prompt('Введіть друге число'));
		getOperation = prompt('Оберіть математичну операцію', '+ - / *');
		fn2(fn1(getFirstNumb, getSecondNumb, getOperation));
	}

	const dil = (a, b) => {
		if (b === 0) {
			document.write('На 0 ділити не можна!');
		}
		return a / b;
	};

	const mn = (a, b) => {
		return a * b;
	};
	const dod = (a, b) => {
		return a + b;
	};
	const vidn = (a, b) => {
		return a - b;
	};

	const show = (rez) => {
		document.write('Результ: ' + getFirstNumb + ' ' + getOperation + ' ' + getSecondNumb + ' = ' + rez);
		//document.write('Результат операції: ' + rez);
	};

	const calc = (a, b, s) => {
		switch (s) {
			case '+':
				return dod(a, b);
			case '-':
				return vidn(a, b);
			case '*':
				return mn(a, b);
			case '/':
				return dil(a, b);
			default:
				throw Error(s + 'не є знаком операції');
		}
	};

	getInformation(calc, show);
}

// Задача 7. Функція ggg приймає 2 параметри: анонімну ф-цію, яка повертає 3 та анонімну ф-цію, яка повертає 4. Поверніть результатом ф-ції ggg суму 3 та 4.

{
	function ggg(fn1, fn2) {
		const result1 = fn1();
		const result2 = fn2();
		return result1 + result2;
	}

	var result = ggg(
		function () {
			return 3;
		},
		function () {
			return 4;
		}
	);
	console.log('Результат операції: 3 + 4 = ' + result);
}
