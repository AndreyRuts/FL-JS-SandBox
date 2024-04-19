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