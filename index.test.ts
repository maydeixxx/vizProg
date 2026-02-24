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