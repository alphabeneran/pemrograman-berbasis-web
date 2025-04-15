alert(`Kalkulator JavaScript`)

const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((acc, num) => acc + num, 0);
        case '-':
            return numbers.reduce((acc, num) => acc - num);
        case '*':
            return numbers.reduce((acc, num) => acc * num, 1);
        case '/':
            return numbers.reduce((acc, num) => acc / num);
        case '%':
            return numbers.reduce((acc, num) => acc % num);
        default:
            return 'Operator tidak valid';
    }
};

// Contoh penggunaan
console.log(calculator('+', 10, 5, 2)); // 17
console.log(calculator('-', 10, 5, 2)); // 3
console.log(calculator('*', 10, 5, 2)); // 100
console.log(calculator('/', 10, 5));    // 2
console.log(calculator('%', 100, 3));    // 1
