//1 задание
const colors = ['red', 'green', 'blue'];
console.log(colors.length); // будет 3

//2 задание
const animals = ['monkey', 'dog', 'cat'];
const lastElement = animals[animals.length - 1];
console.log(lastElement); //Последний элемент cat

//3 задание
//1 способ метод splice для удаления всех элементов массива.
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length); //index 0 , второе значение длина массива - количества элементов для удаление
console.log(numbers);
//2 способ 
const numbers = [5, 43, 63, 23, 90];


//4 задание pop/push shift/unshift
javascript
const students = ['Polina', 'Dasha', 'Masha'];

// Удаляем последний элемент массива и добавляем 'Borya'
students.pop(); // Удаляем последний элемент (Masha)
students.push('Borya'); // Добавляем 'Borya'

// Удаляем первый элемент массива и добавляем 'Andrey'
students.shift(); // Удаляем первый элемент (Polina)
students.unshift('Andrey'); // Добавляем 'Andrey'

console.log(students); // результат

//5 задание
// цикл for
const cats = ['gachito', 'tom', 'batman'];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// цикл for...of
const cats = ['gachito', 'tom', 'batman'];

for (const cat of cats) {
  console.log(cat);
}

//6 задание

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const allNumbersArray = evenNumbers.concat(oddNumbers);// Соединяем два массива чисел в один

//В полученном массиве попробуйте найти индекс числа 8
const index = allNumbersArray.indexOf(8);



