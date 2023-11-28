var change = function (amount, coins) {
    const numOfWays = new Array(amount + 1).fill(0);
    numOfWays[0] = 1;

    for (let coin of coins) {
        for (let i = 1; i < amount + 1; i++) {
            if (coin <= i) {
                numOfWays[i] += numOfWays[i - coin];
            }
        }
    }

    return numOfWays[amount];
};

var fib = function (n) {
    const memoize = [];
    memoize[0] = 0;
    memoize[1] = 1;

    fibHelp(n, memoize);

    return memoize[n];
};


const fibHelp = (n, memoize) => {
    if (n < 1) {
        return 0;
    }

    if (memoize[n]) {
        return memoize[n];
    }

    const res = fibHelp(n - 1, memoize) + fibHelp(n - 2, memoize);

    memoize[n] = res;
    return res;
}

module.exports = { change, fib }
