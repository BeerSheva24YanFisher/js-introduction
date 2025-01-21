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
    //TODO
    //return object with data about occurrences for each character in the given string
    //"abcadab"
    //data should include a encountered 3 times
    //b - two times; c and d - one time
}