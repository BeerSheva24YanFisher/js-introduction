import { describe, expect, it } from "vitest";
import { makeGeneratorClosedRange, makeIterableBasedGenerator } from "../objects.mjs";
it("iterator test based on generator function", ()=>{
  //
    const iterator = makeGeneratorClosedRange(1, 3);
    const expected = [1, 2, 3];
    const actual = [];
    
    while(true) {
        const {value, done} = iterator.next();
        if(done) {
          break;
        }
        actual.push(value)
    }
    expect(actual).toEqual(expected);
});
it("terable test based on generator function", () => {
  const iterable = makeIterableBasedGenerator(1, 3);
  const expected = [1, 2, 3];
  const actual = [];
  for (const num of iterable) {
    actual.push(num);
  }
  expect(actual).toEqual(expected);
  actual.length = 0;
  for  (const num of iterable) {
    actual.push(num);
  }
  expect(actual).toEqual(expected);
})




// import {test, expect} from 'vitest';
// import  getOccurencesObject  from '../objects.mjs';
// test("getOccurencesObject with destructuring", () => {
//     const str = "aaabgbgc";
//     let {a, b, g, c} = getOccurencesObject(str);
//     expect(a).toBe(3);
//     expect(b).toBe(2);
//     expect(g).toBe(2);
//     expect(c).toBe(1);


// })
// test("string with digits, spaces and hyphens", () => {
//     const str = "1,d-     ";
//     const res = getOccurencesObject(str);
//     expect(res.d).toBe(1);
//     expect(res[1]).toBe(1);
//     expect(res[' ']).toBe(5)
// })
// test ("test for oject as key inside another object", () => {
//     const x = {x:5};
//     x.toString = function() {
//         return `x:${this.x}` //"x:" + this.x
//     };
//     const y = {y:10};
//     const obj1 = {}
//     obj1[x] = 200;
//     const obj2 = obj1;
//     obj2[y] = 300;
//     expect(obj2[x]).toBe(200);
//     expect(obj1["[object Object]"]).toBe(300);
//     expect(obj1[{z:100}]).toBe(300);
//     console.log("printing object using log",x);
//     console.log("printing object using method toSTring",  x.toString());
    
  
  
    
// });

// import {describe, expect, it} from 'vitest';
// describe ("Object copying", () => {
    
//    it("showing example of references assignment but not copy", () => {
//     const person1 = {name: "Vasya", age:25};
//      const person2 = person1;
//     person2.gender="male";
//     expect(person1.gender).toBe("male")

//    });
   
//    it("copying using spread operator", () => {
//     const person1 = {name: "Vasya", age:25};
//     const person2 = {...person1}
//     person2.city="Lod";
//     expect(person1.city).toBeUndefined();
//     person1.city="Lod";
//     expect(person1 != person2).toBeTruthy();
//     expect(person2).toEqual(person1);
//     expect(person2).not.toBe(person1)
//    });
  
// });