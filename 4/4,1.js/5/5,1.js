let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

let first = styles.shift();
console.log(first);

styles.unshift("Rap", "Reggae");

console.log(styles);