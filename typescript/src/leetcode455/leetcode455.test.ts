import findContentChildren from "./leetcode455";

test("findContentChildren", () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toEqual(1);
  expect(findContentChildren([1, 2], [1, 2, 3])).toEqual(2);
  expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toEqual(2);
  expect(findContentChildren([], [1, 2])).toEqual(0);
  expect(findContentChildren([1, 2], [])).toEqual(0);
  expect(findContentChildren([1, 2, 3], [3])).toEqual(1);
});
