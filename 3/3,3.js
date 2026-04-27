function sumTo(n) {
    let sum = 0;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
    } else {
        for (let i = 1; i >= n; i--) {
            sum += i;
        }
    }

    return sum;
}

// приклади
console.log(sumTo(5));   // 15
console.log(sumTo(-3));  // -5 (1 + 0 + (-1) + (-2) + (-3))