import {describe, it, expect, test} from 'vitest';
import { myParseInt, myToStringFromNumber, myParseIntRadix } from '../conversion-functions.mjs';
//Unit test is AAA - Arranging / Act / Assertion
describe("myParseInt test suit", () => {
   it("reqular string with positive integer number", () => {
        const strNum = "12"; //Arranging
        const res = myParseInt(strNum) + 2; //Act
        expect(res).toBe(14); //Assertion
   }) ;
   it ("reqular string with negative integer number", () => {
    expect(myParseInt("-12")).toBe(-123);
   });
   it ("string with  number following +", () => {
    expect(myParseInt("+12")).toBe(12)
   });
   it ("undefined", () => {
    expect(myParseInt()).toBeNaN();
   });
   it ("null", () => {
    expect(myParseInt(null)).toBeNaN();
   });
   it ("float number inside a string", () => {
    expect(myParseInt("12.35")).toBe(12);
   });
   it("string beginning with the space", () => {
    expect(myParseInt(" 12")).toBe(12);
   }),
   it ("space in middle", () => {
    expect(myParseInt("12 35")).toBe(12);
   });
   it ("first symbol is not a number", () => {
    expect(myParseInt("a1")).toBeNaN()
   });
   it ("string begins from ++", () => {
    expect(myParseInt("++12")).toBeNaN()
   });
   it ("space following -", () => {
    expect(myParseInt("- 12")).toBeNaN();
   });

});

describe("myToStringFromNumber test suit", () => {
    it("positive integer number", () => {
        expect(myToStringFromNumber(12)).toBe("12");
    });
    it("negative integer number", () => {
        expect(myToStringFromNumber(-12)).toBe("-12");
    });
    it("zero", () => {
        expect(myToStringFromNumber(0)).toBe("0");
    });
    it("negative zero", () => {
        expect(myToStringFromNumber(-0)).toBe("0");
    });
    it("undefined", () => {
        expect(myToStringFromNumber(undefined)).toBe("");
    });
    it("null", () => {
        expect(myToStringFromNumber(null)).toBe("");
    });
    it("float number", () => {
        expect(myToStringFromNumber(12.35)).toBe("12");
    });
    it("float number", () => {
        expect(myToStringFromNumber(0)).toBe("0");
    });
    it("float number as string", () => {
        expect(myToStringFromNumber("12.35")).toBe("12");
    });
    it("non-numeric string", () => {
        expect(myToStringFromNumber("1a")).toBe("1");
    });
    it("string with leading spaces", () => {
        expect(myToStringFromNumber(" 12")).toBe("12");
    });
    it("string with leading plus", () => {
        expect(myToStringFromNumber("+12")).toBe("12");
    });
    it("string with non-numeric characters at the start", () => {
        expect(myToStringFromNumber("abc12")).toBe("");
    });
    it("empty string", () => {
        expect(myToStringFromNumber("")).toBe("");
    });
    it("string with spaces only", () => {
        expect(myToStringFromNumber("   ")).toBe("");
    });
});

describe('myParseIntRadix', () => {
    test('Valid conversions', () => {
        expect(myParseIntRadix("10", 8)).toBe(8);         // 1*8 + 0
        expect(myParseIntRadix("f", 36)).toBe(15);       // 'f' -> 15
        expect(myParseIntRadix("z", 36)).toBe(35);       // 'z' -> 35
        expect(myParseIntRadix("101", 2)).toBe(5);       // 1*2^2 + 0*2^1 + 1*2^0
        expect(myParseIntRadix("123", 10)).toBe(123);    // Decimal
        expect(myParseIntRadix("1a", 16)).toBe(26);      // 1*16 + 10
    });

    test('Invalid conversions (non-valid characters)', () => {
        expect(myParseIntRadix("3", 2)).toBeNaN();       // '3' invalid in binary
        expect(myParseIntRadix("10103", 2)).toBeNaN();   // Contains '3', invalid in binary
        expect(myParseIntRadix("g", 16)).toBeNaN();      // 'g' invalid in hexadecimal
        expect(myParseIntRadix("!", 10)).toBeNaN();      // '!' invalid in decimal
    });

    test('Edge cases', () => {
        expect(myParseIntRadix("", 10)).toBeNaN();       // Empty string
        expect(myParseIntRadix("0", 10)).toBe(0);        // Valid zero
        expect(myParseIntRadix("000", 10)).toBe(0);      // Leading zeros
        expect(myParseIntRadix("1", 2)).toBe(1);         // Smallest valid binary number
        expect(myParseIntRadix("zz", 36)).toBe(1295);    // 35*36 + 35
    });

    test('Undefined radix', () => {
        expect(myParseIntRadix("10")).toBe(10);          // Default to decimal
        expect(myParseIntRadix("123")).toBe(123);        // Default to decimal
        expect(myParseIntRadix("f")).toBeNaN();          // 'f' invalid in decimal
    });

    test('Invalid radix values', () => {
        expect(myParseIntRadix("10", 1)).toBeNaN();      // Radix < 2
        expect(myParseIntRadix("10", 37)).toBeNaN();     // Radix > 36
        expect(myParseIntRadix("10", undefined)).toBe(10); // Radix undefined, defaults to decimal
    });
});

