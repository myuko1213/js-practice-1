let user = {}; // 1

user.name = "Марк"; // 2
user.surname = "Сміт"; // 3

user.name = "Тарас"; // 4

delete user.name; // 5

console.log(user);