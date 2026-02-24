"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimAndFormat = exports.capitalizeFirst = void 0;
exports.createBook = createBook;
exports.calculateArea = calculateArea;
exports.getStatusColor = getStatusColor;
exports.getFirstElement = getFirstElement;
exports.findById = findById;
function createUser(id, name, email, isActive) {
    if (isActive === void 0) { isActive = true; }
    return {
        id: id,
        name: name,
        email: email,
        isActive: isActive
    };
}
var user1 = createUser(1, "Alex", "alex@mail.com");
var user2 = createUser(2, "Bob");
function createBook(book) {
    return book;
}
var book1 = createBook({
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: 'fiction'
});
var book2 = createBook({
    title: "Clean Code",
    author: "Robert Martin",
    genre: 'non-fiction'
});
function calculateArea(shape, value) {
    if (shape === 'circle') {
        return Math.PI * value * value;
    }
    return value * value;
}
var circleArea = calculateArea('circle', 10);
var squareArea = calculateArea('square', 5);
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
var color1 = getStatusColor('active');
var color2 = getStatusColor('new');
var capitalizeFirst = function (value) {
    if (!value)
        return value;
    return value[0].toUpperCase() + value.slice(1);
};
exports.capitalizeFirst = capitalizeFirst;
var trimAndFormat = function (value, uppercase) {
    if (uppercase === void 0) { uppercase = false; }
    var trimmed = value.trim();
    return uppercase ? trimmed.toUpperCase() : trimmed;
};
exports.trimAndFormat = trimAndFormat;
//генерик
function getFirstElement(arr) {
    return arr[0];
}
var numbers = [1, 2, 3];
var strings = ["a", "b", "c"];
function findById(items, id) {
    return items.find(function (item) { return item.id === id; });
}
var users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Bob" }
];
var foundUser = findById(users, 2);
