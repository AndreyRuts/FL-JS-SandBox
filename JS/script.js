"use strict";
let userEyeColor;
userEyeColor = 'green';
let user;
user = 'Вася';
let userName;
userName = 'Вася';
console.log(user);
// ---------------------------------------------------------
let falseCheck = 9 > 10;
console.log(falseCheck);
console.log(typeof falseCheck);
// =========================DataTypes=======================
let userAge = 34;
let userAgeInfo = `dik length = ${userAge}`;
console.log(userAgeInfo);
// ---------------------------------------------------------
let changTypeTest = 'ТридцатьДва';
console.log(changTypeTest);
console.log(typeof changTypeTest);

changTypeTest = Number(32);
console.log(changTypeTest);
console.log(typeof changTypeTest);
// ---------------------------------------------------------
let userHeight = "45" / "8";
console.log(userHeight);
console.log(typeof userHeight);
// ========================= Operators Урок №5 =======================
// + - * / % **
let resultOne = "FreeLancer" + " " + "in" + " " + "law";
console.log(resultOne);

let resultTwo = 24 - 12 + " FreeLancer";
console.log(resultTwo);
console.log(typeof resultTwo);
// --------------------------(Пример оператор > строки > числа)-------------------------------
let resultThree = "25" - 5;
console.log(resultThree);
console.log(typeof resultThree);

let resultFour = 10 * "80";
console.log(resultFour);
console.log(typeof resultFour);

let resultFive = 3 * "FreeLancer";
console.log(resultFive);
console.log(typeof resultFive);
// ----------------------(переход из строк в числа)-----------------------------------
let users = "25";
let admins = "10";
console.log(users + admins);
console.log(typeof (users + admins));

console.log(+users + +admins);
console.log(typeof (+users + +admins));
// ----------------(Пример присвоения по цепочке{не работает в Strict})-----------------------
// let someOne = someTwo = someThree = 2 + 2;
// console.log(someOne);
// console.log(someTwo);
// console.log(someThree);
// -------------------(Инкримент и Дикримент{применимо только к переменным})--------------------
let addUser = 2;
addUser++;
console.log(addUser);
let removeUser = 2;
removeUser--;
console.log(removeUser);

// addUser++; - постфикс
// ++addUser; - префикс {Для получения моментального результата}

let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers);
// --------------(Операторы сравнения{Логические возвращают true/fals})----------------------
// < > <= >= == != === !== || &&
let testUserName = "";
let testUserNickName = "FreeLancer";

let testUser = testUserName || testUserNickName || "No name";
console.log(testUser);

let adminsT = 0;
let usersT = 5;
adminsT > usersT || usersT++;
console.log(usersT);

let usersF = 1;
(usersF > 0) && console.log(`Пользователей ${usersF}`);
//    true                    true(берет послед)

console.log(!true && 58 || 18 && !1);
//          false(берет)        false      (! - не)

let nameJ = "Xandr";
console.log(nameJ ?? "No Name");
// ?? - возвращает 1 знгачение есть тип данных не null или undenined
// ========================= Условный оператор Урок №6 =======================
let message = "Helo World";
if (3 > 2) {
    console.log(message);
}

let messageTwo = "WTF";
let first = 5;
let second = 10;

if (first < second) {
    console.log(messageTwo);
}
// -------------- else (Основной вид записи if/else----------------------
let messageThre = "FirstMessage";
let nember = 6;
if (nember > 10) {
    console.log(messageThre);
} else {
    console.log('SecondMessage');
}


let testNumber = 0;
if (testNumber > 50) {
    console.log("testNumber > 50");
} else if (testNumber > 30) {
    console.log("testNumber > 30");
}
else if (testNumber > 10) {
    console.log("testNumber > 10");
}
else if (testNumber > 1) {
    console.log("testNumber > 1");
} else {
    console.log("something wrong")
}
// -------------- Условный оператор ?(Стоит применять для возврата того или иного из 1 строки)----------------------
let testFirstMessage = "Hello";
let testSecondMessage = (9 > 10) ? ", John!" : ", Elizabeth!";
testFirstMessage += testSecondMessage;
console.log(testFirstMessage);

let someFirstMessage = "Hello";
let someSecondMessage = 3 > 10 ? ", Michael!" :
    31 > 30 ? ", Olga!" :
        5 > 10 ? ", Andrev!" :
            5 > 1 ? ", Oliver!" : ", Eugen!";

someFirstMessage += someSecondMessage;
console.log(someFirstMessage);
// ========================= Циклы FORE и WHILE Урок №7 =======================
let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}
//       начало;      условие;      шаг цикла
for (let testNum = 0; testNum < 5; testNum++){
    console.log(testNum);
}

// дериктива брейк - при выполнении полностью останавливает цикл
let someNum = 0;
for (; someNum < 5; someNum++){
    console.log(someNum);
    if (someNum == 2) break;
}

console.log(`job done, someNum = ${someNum}`);
// дериктива continue - при выполнение игнорит точку и продолжает вып цикла
let omgNum = 0;
for (; omgNum < 5; omgNum++){
    if (omgNum == 2) continue;
    console.log(omgNum);
}
// деректива с меткой - для остановки дочернего цикла и перехода по метке (в родителя)
startPoint: for (let wtfNum = 0; wtfNum < 2; wtfNum++){
    for (let size = 0; size < 3; size++){
        if (size == 2) {
            break startPoint;
        }
        console.log(size);
    }
}
// ДЗ к уроку № 7
// Задача №1
let eNum = 1;
while (eNum < 6) {
    console.log(eNum);
    eNum++;
}
// Задача №2
// Нет последнее число выводимое в консоль не будет 0 потому что false не выведет...
// Задача №3
let zNum = 0
while (zNum < 3) {
    console.log(`Number: ${zNum}`);
    zNum++;
}
// Задача №4
for (let fNum = 0; fNum < 2; fNum++){
    for (let fSize = 0; fSize < 3; fSize++){
        console.log(fSize);
        if (fSize == 1) break;
    }
}
// ========================= Стрелочные функции/рекурсия/планирование Урок №8 =======================
function calcSumm(numOme = 2, numTwo = 3) {
    console.log(`Переменная numOne:${numOme}`);
    console.log(`Переменная numTwo:${numTwo}`);

    let numSumm = numOme + numTwo;
    console.log(`Сумма:${numSumm}`);
}
calcSumm(3, 7);
// Функция с return
function someSumm(someOne, someTwo) {
    let omgSumm = someOne + someTwo;
    return omgSumm;
}
let funcResult = someSumm(3, 2);
console.log(`summ: ${funcResult}`);