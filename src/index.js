module.exports = function getZerosCount(number, base) {
    const prime_numbers = {};
    const arr = [];

    for (let i = 2; i <= base; i++) {
        while (base % i == 0) {
            if (!prime_numbers[i]) {
                prime_numbers[i] = 0;
            }
            prime_numbers[i]++;
            base = base / i;
        }
    }
    for (let key in prime_numbers) {
        let counter = number;
        let zeros = 0;
        while (counter > 1) {
            counter = Math.trunc(counter / key);
            zeros = zeros + counter;
        }
        prime_numbers[zeros] = prime_numbers[key];
        delete prime_numbers[key];
        arr.push(Math.trunc(zeros / prime_numbers[zeros]));
    }
    return Math.min.apply(null, arr);
}