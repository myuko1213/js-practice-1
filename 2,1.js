function isEmpty(obj) {
    for (let key in obj) {
        return false; // есть хотя бы одно свойство
    }
    return true; // пустой объект
}

// Проверка
let testObj = {};
console.log(isEmpty(testObj)); // true

testObj.name = "Test";
console.log(isEmpty(testObj)); // false