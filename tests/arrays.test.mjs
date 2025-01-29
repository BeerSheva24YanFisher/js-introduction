import {describe, it, expect} from 'vitest'
import { myMap, myReduce } from '../arrays.mjs';
const array = [10, 1000, -10, 30, 60];
describe("map / reduce", () => {
    array.map = myMap;
    array.reduce = myReduce;
    it("myMap testing", () => {
       const expected = [10, 1001, -8, 33, 64]//array of elements where each element will be converted to element + index
       expect(array.map((e,index) => e + index)).toEqual(expected);
    });

    it("myReduce testing: sum of all elements", () => {
        const expected = 1090; // 10 + 1000 - 10 + 30 + 60
        expect(array.reduce((acc, curr) => acc + curr, 0)).toEqual(expected);
    });

    it("myReduce testing: find min and max in one reduce call", () => {
        const expected = { min: -10, max: 1000 }; // min and max values
        const result = array.reduce((acc, curr) => {
            return {
                min: Math.min(acc.min, curr),
                max: Math.max(acc.max, curr),
            };
        }, { min: Infinity, max: -Infinity });
        expect(result).toEqual(expected);
    });
});