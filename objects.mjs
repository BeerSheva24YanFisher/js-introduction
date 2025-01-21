let name = 'Vasya';
let age = 25;
const person = {name: 'Petya', age: 40};
person.gender = "male";
delete person.age
let key = "gender";
let field = person[key];
key = "age";
person[key] = 20;
({name, age} = person);
let {gender} = person
let a;

function getOccurencesObject(string) {
    const occurrences = {};

    for (let char of string) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    return occurrences;
}