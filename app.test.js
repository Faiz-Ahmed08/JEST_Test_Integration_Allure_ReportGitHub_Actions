describe("Testing app sum", () => {
  const sum = require("./app").sum;

test("add two numbers", () => {
  expect(sum(3, 4)).toBe(8);
  }
});
});
