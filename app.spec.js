const multiply = require("./app");

// it("testing 2 * 2 = 4", () => {
//   expect(multiply(2, 2)).toBe(4);
// });

describe("testing app.js", () => {
  it("testing 2 * 2 = 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("testing undefined = 0", () => {
    expect(multiply()).toBe(0);
  });
});
