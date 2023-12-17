
const { change, fib } = require('./CoinChange_FabonacciNumber.js');

describe("Testing change", () => {

    test("When making change for amount 0, return 1 regardless of the coins passed", () => {
        const coins1 = [];
        const coins2 = [1, 3, 19];
        const coins3 = [5, 100];

        expect(change(0, coins1)).toEqual(1);
        expect(change(0, coins2)).toEqual(1);
        expect(change(0, coins3)).toEqual(1);
    });

    test("When making change for 8, with coins [1, 2, 3] return  10", () => {
        const coins = [1, 2, 3];

        expect(change(8, coins)).toEqual(10);
    });

});

describe("Testing fib", () => {

    test("Return 0 as the fibonacci number of 0", () => {
        expect(fib(0)).toEqual(0);
    });

    test("Return 1 as the fibonacci number of 1", () => {
        expect(fib(1)).toEqual(1);
    });

    test("Return 21 as the fibonacci number of 8", () => {
        expect(fib(8)).toEqual(21);
    });

});
