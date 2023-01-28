import  {FizzBuzz} from "../src/scripts/FizzBuzz.js";

describe('FizzBuzz', () => {

    test('should return Buzz if is divisivle by five', () => {
        //Given
        let num = 5;
        //When
        const result = FizzBuzz (num);
        //Then
        expect (result).toBe("Buzz");
    });

});

test('should return Fizz if is divisivle by three', () => {
        //Given
        let num = 3;
        //When
        const result = FizzBuzz(num);
        //Then
        expect(result).toBe("Fizz");

    });
//HELP!!!!!
    test('should return Fizz if is divisivle by three or five', () => {
        //Given
        let num =  3 && 5;
        //When
        const result = FizzBuzz(num);
        //Then
        expect(result).toBe("FizzBuzz");

    });


  