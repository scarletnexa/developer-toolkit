const { fDate, fTime, dateAmount, fNumber, JsonToXml, generateRandomString, toKebabCase, deepClone, bytesToSize, shuffleArray, isValidEmail, isStrongPassword, removeDuplicates, sortByProperty, objectToQueryString, truncateString, chunkArray, isVaildUrl, getDifferenceBetweenArrays, arrayIntersection, deepMerge, palindromeChecker, capitalize, toCamelCase } = require("../lib/index");

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
console.log(dateAmount(date));
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

const users = [
    { name: 'John', age: 25 },
   { name: 'Jane', age: 22 },
   { name: 'Jack', age: 27 }
 ];

console.log(sortByProperty(users, 'age'));

const obj = {
    name: "John",
    age: 31,
    city: "New York"
};

console.log(objectToQueryString(obj));
console.log(objectToQueryString(obj, true));

console.log(truncateString("Hello World", 5));

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

console.log(isVaildUrl("https://www.google.com"));

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayIntersection(arr1, arr2));

const obj1 = {
    name: "John",
    age: 31,
    city: "New York"
};

const obj2 = {
    name: "John",
    age: 31,
    city: "New York"
};

console.log(deepMerge(obj1, obj2));

console.log(palindromeChecker("racecar"));

console.log(capitalize("hello world"));

console.log(toCamelCase("hello world"));