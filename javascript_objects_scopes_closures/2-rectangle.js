class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== "number" || typeof h !== "number") {
      // If w or h is equal to 0 or not a positive integer, create an empty object
      // You can customize this part based on your specific requirements
      return {};
    }

    // Initialize the instance attributes width and height
    this.width = w;
    this.height = h;
  }
}

// Example usage:
const validRectangle = new Rectangle(5, 8);
console.log(validRectangle); // Outputs: Rectangle { width: 5, height: 8 }

const invalidRectangle = new Rectangle(0, 10);
console.log(invalidRectangle); // Outputs: {}
