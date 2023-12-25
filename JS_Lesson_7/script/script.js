// Класи

// Конструктори і класи виконують фактично однакові дії.
// В класах не потрібно турбуватись про запис методів на прототип
// Хоістинг (підйом змінних) - виклик змінних до їх ініціалізації (оголошення)

// Відмінність let від const - let можна поміняти, а const - ні, але це не стосується масивів та обʼєктів, які можуть мати змінну структуру, але не можуть змінювати свої посилання на інший обʼєкт або масив, тобто масив перезаписати в нас не вийде, а от змінити значення властивостей можна .

{
  const a = {
    name: 1,
  }; // адреса ff2342g

  const b = {
    name: 1,
  }; // адреса 4443fr35

  // Тут при порівнянні в перших двох випадках виводить значення false, оскільки ми порівнюємо не сам зміст. Обʼєкти мають посилальну структуру (ссилковий тип даних ), тому вони записуються не на саму змінну, а просто існують в нашій памʼяті за певною адресою і саме ці адреси порівнюються в даних випадках.
  console.log(a === b); // false
  console.log(a == b); // false
  console.log(a.name === b.name); // true
}

// Існує 2 способи запису стрілкових функцій

// Спосіб 1
// Класичний спосіб запису стрілкових функцій
{
  const arrow = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
  };
}

// Спосіб 2
// Це скорочений варіант запису стрілкової функції, тобто, якщо ми маємо обробити тільки один аргумент, ми можемо записати його без фігурних дужок та return. return тут спрацьовує автоматично за замовчуванням. Якщо хочемо, щоб return виводився, маємо все таки написати дужки.
// const назва_ф-ції = арг => тіло_ф-ції;
{
  const arrow = (arg1) => arg * arg;
}

// Із цих двох варіантів найкращим буде саме перший, оскільки він читабельніший

// .filter() - фільтрує інформацію за заданими критеріями. Принцип роботи схожий на forEach(), тобто метод викликається окремо для кожного елементу і перезбирає масив (повертає новий, відфільтрований, не змінюючи попередній)
{
  const arr = [-22, 45, 5, 333, -5, 10, -75];

  // Функція відкидатиме елементи, які не відповідають правилу в return, тобто всі item > 0 будуть проігноровані.
  const data = arr.filter((item) => {
    return item < 0;
  });

  console.log(data);
}

// Такий тип ф-цій використовується тільки для обʼєктів і класів. Синтаксис дещо змінений, тепер не потрібно дописувати якісь допоміжні слова чи символи
{
  const greeter = {
    greet(name) {
      console.log("Hello", name);
    },

    greetAll(names) {
      names.forEach((name) => {
        this.greet(name);
      });
    },
  };
}

// Агрумент за замовчуванням
{
  // Тут короткий варіант запису ф-ції, в якій потрібен аргумент за замовчуванням (нововведення)
  const print = (name = "Імʼя користувача приховано") => {
    document.write("<p>Ласкаво просимо : " + name);
  };

  // Це старий варіант запису, який працює ідентично
  const print1 = (name) => {
    if (name === undefined) {
      name = "Імʼя користувача приховано";
    }

    document.write("<p>Ласкаво просимо : " + name);
  };

  print1();
  print("Vasya");
}

// Оператор  rest(...) також працює в стрілочних ф-ціях (створює масив)

//
{
  const arr = [555, 333, 444, 111];

  // Math.max() - метод, який знаходить максимальне значення серед аргументів, які ми йому передаємо.
  // Math.min() - -||- мінімальне значення -||-

  console.log(Math.max(arr[0], arr[1], arr[2], arr[3]));
}

// Для того, щоб не прописувати кожен аргумент, можемо скористатись оператором rest. Таким чином ми спрощуємо написання коду
{
  const arr = [555, 333, 444, 111];
  const arr1 = [1, 2, 3, 4, 5, 6, 7];

  const res = Math.min(...arr);
  console.log(res);

  // Копіювання масиву
  const copy = [...arr, ...arr1, 77]; // Тут передали копії масивів та обʼєднали їх в один

  function name1() {
    console.log(arguments);
  }

  name1(...arr);
  console.log(copy);
}

// Деструктирізація

// Для того, щоб скористатися можливостями деструктирізації і не вводити постійно аргумент, який передаємо, можемо написати, що ми хочемо отримати (обʼєкт або масив) і які саме дані нас цікавлять.

{
  const info = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      postId: 1,
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
  ];

  function name1({ id, name, body, ...other }) {
    // За допомогою предоператора можемо вивести і всі інші оператори в масиві. Назвати їх можна будь-як (тут other)
    console.log(id);
    console.log(name);
    console.log(body);
    console.log(other);
  }

  name1(info[0]);
}

// Ще один приклад деструктиризації
{
  const arr = [1, 1, 2, 8, 9, "la la la"];

  const [a, b, c, ...others] = arr;

  console.log(others); // [8, 9, 'la la la']
}

// Object.assogn() - ф-ція, яка використовується для копіювання, обʼєднування та модифікування обʼєкту

// Класи
// В класі має бути присутнім конструтор
{
  class Animal {
    constructor(name, voise) {
      this.name = name;
      this.voise = voise;
    }
    // Метод на прототипі
    sey() {
      console.log(`${this.name} може ${this.voise}`);
    }
  }

  // Наслідування в класах
  // extends - метод для наслідування класів
  class Bird extends Animal {
    constructor(name, voise, canFly) {
      super(name, voise); // Ключове слово super, яке відповідає занаслідування. В дужках записуємо, що саме потрібно наслідувати
      this.canFly = canFly;

      Bird.people++;
    }
  }

  Bird.people = 0;

  // Створення нового екземпляру класу
  const obj1 = new Bird("Гуска", "Крякати", true);
  const obj12 = new Bird("Гуска", "Крякати", true);
  const obj13 = new Bird("Гуска", "Крякати", true);
  const obj14 = new Bird("Гуска", "Крякати", true);
  const obj15 = new Bird("Гуска", "Крякати", true);

  //console.log(obj1.sey());

  // static - приватна властивість
}
