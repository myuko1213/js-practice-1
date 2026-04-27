function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введіть число:", "");

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}