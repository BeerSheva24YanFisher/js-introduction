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
        if(index < strNum.length && !isNaN(getDigit(strNum[index]))) {
            res = 0;
            let running = true;
            while(index < strNum.length && running) {
                let digit = getDigit(strNum[index]);
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
function getDigit(digitStr) {
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
    if ((Tradix === undefined || (Tradix > 1 && Tradix < 37)) && strNum !== "") {
        const radix = Tradix !== undefined ? Tradix : 10;
        const validChars = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, radix);
        result = 0;
        for (const char of strNum.toLowerCase()) {
            if(!validChars.includes(char)){
                flag = false;
            }
            if (validChars.includes(char)) {
                result = result * radix + validChars.indexOf(char);
            }
        }
        
    }
    
    return  flag ? result: NaN;
}