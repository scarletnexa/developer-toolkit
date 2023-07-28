const { fDate, fTime, dateAmmount, fNumber, JsonToXml, generateRandomString, toKebabCase, deepClone, bytesToSize, shuffleArray, isValidEmail, isStrongPassword, removeDuplicates } = require("../lib/index");

const dateString = "2023-07-28T22:14:55.216Z";
const number = 123456789;

const json = [
    {
        "name": "John",
        "age": 31,
        "city": "New York"
    },
    {
        "name": "John",
        "age": 31,
        "city": "New York"
    },
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

const date = new Date(dateString);

console.log(fDate(date));
console.log(fTime(date));
console.log(fTime(date, true));
console.log(dateAmmount(date));
console.log(fNumber(number));
console.log(JsonToXml(json));


console.log(generateRandomString(10));
console.log(toKebabCase("Hello World"));
console.log(deepClone(json));
console.log(bytesToSize(1024));
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(isValidEmail("ttt"));
console.log(isStrongPassword("123456789"));
console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));