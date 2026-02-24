import { describe, it, expect } from "vitest"
import {
  createBook,
  calculateArea,
  getStatusColor,
  capitalizeFirst,
  trimAndFormat,
  getFirstElement,
  findById
} from "./index"

describe("createBook", () => {
  it("should create book correctly", () => {
    const book = createBook({
      title: "Test",
      author: "Author",
      genre: "fiction"
    })

    expect(book.title).toBe("Test")
    expect(book.genre).toBe("fiction")
  })
})

describe("calculateArea", () => {
    it("should calculate circle area", () => {
      expect(calculateArea("circle", 10))
        .toBeCloseTo(314.159, 2)
    })
  
    it("should calculate square area", () => {
      expect(calculateArea("square", 5))
        .toBe(25)
    })
})

describe("getStatusColor", () => {
    it("should return correct color", () => {
      expect(getStatusColor("active")).toBe("green")
      expect(getStatusColor("inactive")).toBe("red")
      expect(getStatusColor("new")).toBe("blue")
    })
})

describe("String formatters", () => {
    it("capitalizeFirst", () => {
      expect(capitalizeFirst("typescript"))
        .toBe("Typescript")
    })
  
    it("trimAndFormat", () => {
      expect(trimAndFormat("  hello  "))
        .toBe("hello")
  
      expect(trimAndFormat("  hello  ", true))
        .toBe("HELLO")
    })
})

describe("getFirstElement", () => {
    it("should return first element", () => {
      expect(getFirstElement([1, 2, 3])).toBe(1)
      expect(getFirstElement(["a", "b"])).toBe("a")
    })
  
    it("should return undefined for empty array", () => {
      expect(getFirstElement([])).toBeUndefined()
    })
})

describe("findById", () => {
    const users = [
      { id: 1, name: "Alex" },
      { id: 2, name: "Bob" }
    ]
  
    it("should find user by id", () => {
      expect(findById(users, 2))
        .toEqual({ id: 2, name: "Bob" })
    })
  
    it("should return undefined if not found", () => {
      expect(findById(users, 999))
        .toBeUndefined()
    })
})