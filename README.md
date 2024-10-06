# Map-Filter-Reduce Practice

This repository contains JavaScript exercises that demonstrate the use of the `map()`, `filter()`, and `reduce()` functions for manipulating arrays. Each problem has been solved in a separate JavaScript file, ranging from basic operations like squaring numbers to combining multiple methods for more complex results.

## Table of Contents

1. [Problem 1: Squaring Numbers](#problem-1-squaring-numbers)
2. [Problem 2: Filtering Even Numbers](#problem-2-filtering-even-numbers)
3. [Problem 3: Summing Array Elements](#problem-3-summing-array-elements)
4. [Problem 4: Filter, Square, and Sum](#problem-4-filter-square-and-sum)

---

### Problem 1: Squaring Numbers

- **File**: `Problem_1.js`
- **Description**: Given an array of numbers, use `map()` to create a new array that contains the squares of each number.

```javascript
// Input: [2, 3, 4, 5]
// Expected Output: [4, 9, 16, 25]
```

---

### Problem 2: Filtering Even Numbers

- **File**: `Problem_2.js`
- **Description**: Given an array of numbers, use `filter()` to return an array of only even numbers.

```javascript
// Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [2, 4, 6]
```

---

### Problem 3: Summing Array Elements

- **File**: `Problem_3.js`
- **Description**: Given an array of numbers, use `reduce()` to calculate the sum of all elements.

```javascript
// Input: [5, 10, 15, 20]
// Expected Output: 50
```

---

### Problem 4: Filter, Square, and Sum

- **File**: `Problem_4.js`
- **Description**: First filter out the odd numbers, then square the remaining numbers, and finally, calculate the sum of the squared numbers using `filter()`, `map()`, and `reduce()`.

```javascript
// Input: [1, 2, 3, 4, 5]
// Expected Output: 20
// Explanation: Filtered even numbers: [2, 4], squared: [4, 16], sum: 20
```

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/map-filter-reduce-practice.git
   ```

2. Navigate to the repository directory:
   ```bash
   cd map-filter-reduce-practice
   ```

3. Run each problem file using Node.js:
   ```bash
   node Problem_1.js
   node Problem_2.js
   node Problem_3.js
   node Problem_4.js
   ```

## License

This project is open-source and available under the [MIT License](LICENSE).
