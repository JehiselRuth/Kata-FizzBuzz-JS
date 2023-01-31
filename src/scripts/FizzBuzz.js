 export function FizzBuzz(num) {
  let result = "";
        if (num % 3 == 0)  {
          result += 'Fizz';
          }
        if (num % 5 == 0) {
        result += 'Buzz';
          }
        if (num % 5 == 0 && num % 3 == 0 ) {
          result += 'FizzBuzz';
        }
        return result;
    }
    