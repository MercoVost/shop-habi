// // ▎Уровень 1: Начальный

// import { FaUber } from "react-icons/fa";

// // 1. Напишите функцию, которая принимает два числа и возвращает их сумму.

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(4, 5));

// // 2. Напишите функцию, которая проверяет, является ли число четным.

// function chot(n) {
//   if (n % 2 === 0) {
//     console.log(n, "Четное число");
//   } else {
//     console.log(n, "Не четное число ");
//   }
// }
// chot(4);

// // ▎Уровень 2: Средний

// // 3. Напишите функцию, которая вычисляет факториал заданного числа.

// function fac(n) {
//   let coint = 1;
//   for (let i = 1; i <= n; i++) {
//     coint *= i;
//   }
//   return coint;
// }
// console.log(fac(5));

// // 4. Напишите функцию, которая принимает строку и возвращает её в обратном порядке.

// function rev(str) {
//   return str.split("").reverse().join("");
// }
// console.log(rev("Yakub"));

// // ▎Уровень 3: Продвинутый

// // 5. Напишите функцию, которая фильтрует массив чисел и возвращает только четные.

// function filt(arr) {
//   return arr.filter((e) => e % 2 === 0);
// }
// console.log(filt([1, 2, 3, 4, 5, 6]));

// // 6. Напишите функцию, которая сортирует массив объектов по полю age.

// let arrM = [
//   { name: "yakub", age: 19 },
//   {
//     name: "Yahya",
//     age: 14,
//   },
// ];

// function sorts(arr) {
//   return arr.map((e) => e.age);
// }
// console.log(sorts(arrM));

// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];

// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge(people));

// const sortedPeople = sortByAge(people);
// sortedPeople.forEach((person) => {
//   console.log(`${person.name}, ${person.age}`);
// });

// // ▎Уровень 4: Сложный

// // 7. Напишите функцию, которая находит все дубликаты в массиве.

// // const duplicates = [1, 2, 2, 3, 1].filter((e, i, a) => a.indexOf(e) !== i);
// // duplicates => [2, 1]

// function dub(arr) {
//   return arr.filter((e, i, a) => a.indexOf(e) !== i);
// }
// console.log(dub([1, 2, 1, 2, 3]));

// // 8. Напишите функцию, которая транспонирует двумерный массив (матрицу).
