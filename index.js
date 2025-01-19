// numbers
// var
// let
// const

// console.log("Hello JS");

// let a = 10;
// a = 10 / 3;
// function square(name){return name**2 };
// a = square(a);
// console.log(a);

// a = Math.trunc(a);
// console.log(a);

// a/= 3;
// console.log(a);
// a += "";
// console.log(a);
// let b = 0;
// console.log(b+a);
// a = parseInt(a);
// a = Math.round(a);
// console.log(a);
// a = a.toString();

function strToNum(str) {
    let num = null;
    let isNegative = false;

    if (str[0] === "-") {
        isNegative = true;
        str = str.substring(1);
    }
    while (str[0] / 1 >= 0 && str[0] / 1 <= 9) {
        num = num * 10 + str[0] / 1;
        str = str.substring(1);
    }

    return num == null ? "No number" : isNegative ? -num : num;
}


console.log(strToNum("-123r"));
console.log(strToNum("456r"));
console.log(strToNum("r123"));