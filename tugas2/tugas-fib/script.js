function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries;
}

// Contoh penggunaan
let n = 10;
console.log(fibonacci(n));

alert(`Deret Fibonacci`)