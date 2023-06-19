// Задача 1. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.*/

/*
const num1 = +prompt();
const num2 = +prompt();

function calc(num1, num2) {
  const start = num1 > num2 ? num1 : num2;
  const end = num1 > num2 ? num2 : num1;

  for (var i = start; i >= end; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
calc(num1, num2);
*/

/* Задача 2. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. 
Значение степени должно быть указано по умолчанию 2.*/

/* 
const number =+prompt()
const degree = 2;
function power (number,degree){
  let result ;
  result = number**2;
  console.log(result)
}
*/

/* Задача 3.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.*/

const num =+prompt();
function summ (n) {
   var sum=0
   for (var i=1; i<=n; i++){
      sum+=i;
   }
   return sum;
}

/* Задача 4. Напишите функцию, которая принимает два числовых аргумента n и m и считает 
сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).*/


/* 
function getTwoNumber(n, m) {
   let even = 0;
   let odd = 0;
       if (n < m) {
       for (let i = n; i <= m; i++) {
           if (i % 2 == 0) {
               even += i;
           }
           if (i % 2 != 0) {
               odd += i;
           }
       }
       console.log(even);
       console.log(odd);
       return
   }
         if (n > m) {
       for (let i = m; i <= n; i++) {
           if (i % 2 == 0) {
               even += i;
           }
           if (i % 2 != 0) {
               odd += i;
           }
       }
       console.log(even);
       console.log(odd);
       return
   }
}
getTwoNumber(+prompt(),+prompt())

/* Задача 5. Напишите функцию, которая принимает в качестве аргументов массив строк, 
а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. 
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - 
сравн ение длины строкПример: [ 'one', 'two', 'three' ] => 'three' */

/*function print_long_string(array) {
   if(array.lenght >0) { 

   let long_word = array[0];
      for (let i = 1; i <array.length; i++){
         if(array[i].lenght > long_word) {
            long_word = array[i];
         }
}

   return long_word;
} else {  
   return null
}
}
console.log(print_long_string([]))
*/
