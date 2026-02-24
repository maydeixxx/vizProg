interface User {
  id: number
  name: string
  email?: string
  isActive: boolean
}

function createUser(
  id: number,
  name: string,
  email?: string,
  isActive: boolean = true
): User {
  return {
    id,
    name,
    email,
    isActive
  }
}

const user1 = createUser(1, "Alex", "alex@mail.com")
const user2 = createUser(2, "Bob")

console.log("user1: " + user1);
console.log("user2: " + user2);

type Genre = 'fiction' | 'non-fiction'

interface Book {
  title: string
  author: string
  year?: number
  genre: Genre
}

function createBook(book: Book): Book {
  return book
}

const book1 = createBook({
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: 'fiction'
})

const book2 = createBook({
  title: "Clean Code",
  author: "Robert Martin",
  genre: 'non-fiction'
})


console.log("book1: " + book1);
console.log("book2: " + book2);

function calculateArea(shape: 'circle', radius: number): number
function calculateArea(shape: 'square', side: number): number
function calculateArea(
  shape: 'circle' | 'square',
  value: number
): number {
  if (shape === 'circle') {
    return Math.PI * value * value
  }
  return value * value
}

const circleArea = calculateArea('circle', 10)
const squareArea = calculateArea('square', 5)

console.log("circle: " + circleArea);
console.log("square: " + squareArea);

type Status = 'active' | 'inactive' | 'new'

function getStatusColor(status: Status): string {
  switch (status) {
    case 'active':
      return 'green'
    case 'inactive':
      return 'red'
    case 'new':
      return 'blue'
  }
}

const color1 = getStatusColor('active');
const color2 = getStatusColor('new');

console.log("color1: " + color1);
console.log("color2: " + color2);

type StringFormatter = (value: string, uppercase?: boolean) => string

const capitalizeFirst: StringFormatter = (value) => {
  if (!value) return value
  return value[0].toUpperCase() + value.slice(1)
}

const trimAndFormat: StringFormatter = (value, uppercase = false) => {
  const trimmed = value.trim()
  return uppercase ? trimmed.toUpperCase() : trimmed
}

console.log("format 1: " + capitalizeFirst("typescript"))
console.log("format 2: " + trimAndFormat("  hello world  "))
console.log("format 3: " + trimAndFormat("  hello world  ", true))

//генерик
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

const numbers = [1, 2, 3]
const strings = ["a", "b", "c"]

console.log(getFirstElement(numbers));
console.log(getFirstElement(strings))
console.log(getFirstElement([]));


//поиск юзера по айди
interface HasId {
  id: number
}

function findById<T extends HasId>(
  items: T[],
  id: number
): T | undefined {
  return items.find(item => item.id === id)
}

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Bob" }
]

const foundUser = findById(users, 2)

console.log("find by id user: " + foundUser);

export {
  createBook,
  calculateArea,
  getStatusColor,
  capitalizeFirst,
  trimAndFormat,
  getFirstElement,
  findById,
};