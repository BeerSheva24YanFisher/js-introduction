const zeroCode = "0".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
const MIN_CODE = 32;
const MAX_CODE = 126;
const N_CODES = MAX_CODE - MIN_CODE + 1;

export function myParseInt(strNum) {
    let res = NaN;
    let sign = 1;
    if(strNum != null && strNum != undefined) {
        let index = 0;
        
        strNum = strNum.toString();
        strNum = strNum.trim();
        if(strNum[0] == '-'){
            index++;
            sign = -1;
        } else if(strNum[0] == '+') {
            index++;
        }
        if(index < strNum.length && !isNaN(getDigit1(strNum[index]))) {
            res = 0;
            let running = true;
            while(index < strNum.length && running) {
                let digit = getDigit1(strNum[index]);
                if (isNaN(digit)) {
                    running = false;
                } else {
                    res = res * 10 + digit;
                    index++;
                }
                
            }
           
        }

    }
    return res *= sign;
}

function getDigit1(digitStr) {
    let res = digitStr >= '0' && digitStr <= '9' ? +digitStr : NaN;
    return res;
}

export function myToStringFromNumber(number) {
    let result = "";
    number = parseInt(number);
    if (!isNaN(number)) {
        let isNegative = false;

        if (number < 0) {
            isNegative = true;
            number = -number;
        }

        let digits = "012456789"

        do {
            const digit = number % 10;
            result = digits[digit] + result;
            number = Math.floor(number / 10);
        } while (number > 0);

        if (isNegative) {
            result = "-" + result;
        }
    }
    

    return result;
}

export function myParseIntRadix(strNum, Tradix) {
    let result = NaN;
    let flag = true;
    let i = 0
    if ((Tradix === undefined || (Tradix > 1 && Tradix < 37)) && strNum !== "") {
        const radix = Tradix !== undefined ? Tradix : 10;
        const validChars = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, radix);
        result = 0;
        for (i; i < strNum.length; i++) {
            const char = strNum[i].toLowerCase();
            if (!validChars.includes(char)) {
                break;
            }
            result = result * radix + validChars.indexOf(char);
        }
    }
    return flag && i>0 ? result : NaN;
}

// export function myParseIntRadix(strNum, radix) {
//   let res = NaN;
//   let sign = 1;
//   let actualRadix = getActualRadix(radix);
//   if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
//     let index = 0;
//     strNum = strNum.toString();
//     strNum = strNum.trim();
//     strNum = strNum.toLowerCase();
//     ({ sign, index } = signProcessing(strNum, index, sign));
//     res = convertProcessing(index, strNum, res, radix);
//   }
//   return (res *= sign);
// }

// export function myParseInt(strNum) {
//   return myParseIntRadix(strNum, 10);
// }

// function convertProcessing(index, strNum, res, radix) {
//   if (index < strNum.length && !isNaN(getDigit(strNum[index],radix))) {
//     res = 0;
//     let running = true;
//     while (index < strNum.length && running) {
//       let digit = getDigit(strNum[index], radix);
//       if (isNaN(digit)) {
//         running = false;
//       } else {
//         res = res * radix + digit;
//         index++;
//       }
//     }
//   }
//   return res;
// }

// function signProcessing(strNum, index, sign) {
//   if (strNum[0] == "-") {
//     index++;
//     sign = -1;
//   } else if (strNum[0] == "+") {
//     index++;
//   }
//   return { index, sign };
// }

// function getDigit(digitStr, radix) {
//   const code = digitStr.charCodeAt(0);
//   const base = code > nineCode ? aCode - 10 : zeroCode;
//   const res = code - base;
//   return res > -1 && res < radix ? res : NaN;
// }

// function getActualRadix(radix) {
//   let actualRadix = 10;
//   if (radix !== undefined) {
//     actualRadix = radix > 1 && radix < 37 ? radix : NaN;
//   }
//   return actualRadix;
// }


function stringShift1(str, shift) {
  const strLength = str.length;
  shift = ((shift % strLength) + strLength) % strLength;
  return shift === 0 ? str: str.slice(-shift) + str.slice(0, -shift);
}


//Printed ASCII table codes are from 32 (Space) to 126 (~)
export function stringShift(str, shift) {
  //each character code inside string is increased on the shift value 'a' shifted on 3 will result character 'd'
  //'9' shifted on 2 will result ';'
  //if shifting causes exiting out of printable ASCII character there will by cycling from the begining
  //if the 'shift' is either a negative number or not a number the given string should be returned with no updating
  // stringShift("Hello", 3) -> "Khoor"
  // stringShift("~Z4", 3) -> '"]7'
  return shiftUnshift(str, shift, true);

}
export function stringUnshift(str, unshift) {
  //each character code inside string is decreased on the unshift value 'd' unshifted on 3 will result character 'a'
  //';' ushifted on 2 will result '9'
  //if ushifting causes exiting out of printable ASCII character there will be cycling from the end
  //if the 'ushift' is either a negative number or not a number the given string should be returned with no updating
  // stringUnshift("Khoor", 3) -> "Hello"
  // stringUnhift('"]7', 3) -> "~Z4"
  return shiftUnshift(str, unshift, false);

}
function getActualShift(code, shift, isShift) {
  const actualShift =  isShift ? (code - MIN_CODE)  : (MAX_CODE - code) ;
  return (actualShift + shift) % N_CODES;
}
function shiftUnshiftOneChar(code, shift, isShift) {
  const actualShift = getActualShift(code, shift, isShift);
  const codeResult = isShift ? MIN_CODE +  actualShift : MAX_CODE - actualShift;
  return String.fromCharCode(codeResult);
}
function shiftUnshift(str, shift, isShift) {
  let res = str;
 // undefined.toString() -> "undefined"
 shift = parseInt(shift);
  if(str != undefined && shift > 0 ) {
      str = str.toString();
      res = '';
      for (let i = 0; i < str.length; i++) {
          res += shiftUnshiftOneChar(str[i].charCodeAt(0), shift, isShift)
      }
  }
  return res;
}