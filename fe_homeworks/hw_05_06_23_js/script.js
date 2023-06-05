//1 через prompt считывает число и выводит в консоль число равное 10% от введенного числа

const num = prompt('Enter a number')
const result = calc(num)
function calc(num)
{
  return num * 0.1;
}
console.log("10% от числа " + num + " равно: " + result)


//10% от числа = число * 10 / 100 




/* 2 Написать программу, которая получает два числа и выводит наименьшее
*/

/* const number1 = +prompt('Enter a number1')
const number2 = +prompt('Enter a number2')
if(number1 < number2) {
    console.log("number1")
} else {
    console.log("number2")
}
/*






//3 через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

/* const number = +prompt("Enter a number")
if(number > 100) {
console.log("Число больше 100")
} else if(number == 100) {
    console.log("Число равно 100")
} else {
    console.log("Число меньше 100")
}
*/



/* Написать программу, которая запрашивает у пользователя его имя и возраст (в годах)
 и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, 
 или ‘Hi, <name>’, если пользователь несовершеннолетний. */ 

 /*const username = prompt("Enter Name")
 const yearbirth = +prompt("Enter year birth")
 const age = 2023 - yearbirth
 if (age >= 18) {
     console.log (`Hello, ${username}`)
 } else {
    console.log (`Hi, ${username}`)
 }
*/
 
