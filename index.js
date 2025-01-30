function sleep (timeout) {
    return new Promise ((resolve,reject) => {
     if(timeout < 0) {
         reject("timeout cannot be a negative");
     } else if (timeout > 365 * 24 * 3600000) {
         reject("a promise for time greater than one year may not be provided")
     } else {
         setTimeout(() => resolve(), timeout)
     }
     
    }) 
        
     }
      const timeout = 1000;
     // const promise = sleep(timeout);
     // promise.then(() => console.log(`${timeout} has passed`));
     // console.log(`waiting for ${timeout}`)
     // sleep(timeout).then(() =>console.log(`${timeout} has passed`) )
     // .catch(er => console.log(er)).finally(() => console.log("finally"));
     function initialNumber() {
         return 1;
     }
     function sum(num, factor) {
         return num + (factor ?? 1);
     }
     function displayNum(num){
         if(num > 3) {
             throw "The number cannot be greater than 3";
         }
         console.log(num);
     }
     // let res = sleep(timeout).then(() => initialNumber()).then(num => sum(num)).then(num => sum(num))
     // .then(num => sum(num, -1))
     // .then(num => displayNum(num)).catch(er => console.log(er));
     async function summing(numbers) {
            try {
              await sleep(1000);
              let result = initialNumber();
              for(let num of numbers) {
                  result = result + sum(result, num)
              }
              return result;
            } catch (error) {
                console.log("exception of summing", error)
            }
 
     }
     let res = (async () =>{let res = await summing([1, 2, -13])/*.then(num => displayNum(num)).catch(er => console.log("exception from displayNum",er));*/
     try {
         displayNum(res);
     } catch (error) {
         console.log(error);
     }})();
     console.log("kukureku");
     console.log(1 + res); //"1[object Promise]"