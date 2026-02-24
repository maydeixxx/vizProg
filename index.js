"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimAndFormat = exports.capitalizeFirst = void 0;
exports.createBook = createBook;
exports.calculateArea = calculateArea;
exports.getStatusColor = getStatusColor;
exports.getFirstElement = getFirstElement;
exports.findById = findById;
function createUser(id, name, email, isActive = true) {
    return {
        id,
        name,
        email,
        isActive
    };
}
const user1 = createUser(1, "Alex", "alex@mail.com");
const user2 = createUser(2, "Bob");
console.log("user1: " + user1);
console.log("user2: " + user2);
function createBook(book) {
    return book;
}
const book1 = createBook({
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: 'fiction'
});
const book2 = createBook({
    title: "Clean Code",
    author: "Robert Martin",
    genre: 'non-fiction'
});
console.log("book1: " + book1);
console.log("book2: " + book2);
function calculateArea(shape, value) {
    if (shape === 'circle') {
        return Math.PI * value * value;
    }
    return value * value;
}
const circleArea = calculateArea('circle', 10);
const squareArea = calculateArea('square', 5);
console.log("circle: " + circleArea);
console.log("square: " + squareArea);
function getStatusColor(status) {
    switch (status) {
        case 'active':
            return 'green';
        case 'inactive':
            return 'red';
        case 'new':
            return 'blue';
    }
}
const color1 = getStatusColor('active');
const color2 = getStatusColor('new');
console.log("color1: " + color1);
console.log("color2: " + color2);
const capitalizeFirst = (value) => {
    if (!value)
        return value;
    return value[0].toUpperCase() + value.slice(1);
};
exports.capitalizeFirst = capitalizeFirst;
const trimAndFormat = (value, uppercase = false) => {
    const trimmed = value.trim();
    return uppercase ? trimmed.toUpperCase() : trimmed;
};
exports.trimAndFormat = trimAndFormat;
console.log("format 1: " + capitalizeFirst("typescript"));
console.log("format 2: " + trimAndFormat("  hello world  "));
console.log("format 3: " + trimAndFormat("  hello world  ", true));
//генерик
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
console.log(getFirstElement(numbers));
console.log(getFirstElement(strings));
console.log(getFirstElement([]));
function findById(items, id) {
    return items.find(item => item.id === id);
}
const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Bob" }
];
const foundUser = findById(users, 2);
console.log("find by id user: " + foundUser);
