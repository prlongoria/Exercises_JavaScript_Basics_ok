import { compareNumbers, isGreaterThan10, isJane } from "../../src/fundamentals-ex/comparisonExercises.js";

describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Jane';
        const result = isJane (name);
        expect(result).toEqual('Jane');
    });

    test('should return is not Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Donald';
        const result = isJane (name);
        expect(result).toEqual('Is not Jane');
    });



    test('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = '10';
        let number2 = '10';
        let result = compareNumbers (number1, number2);
        expect(result).toEqual(10);
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity = 15;
        let result = isGreaterThan10(quantity);

        expect(result).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test.skip('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        
        expect(result).toBeGreaterThan();
        expect(result).toEqual(20);
    });
});