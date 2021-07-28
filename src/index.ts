enum Gender {
  Male,
  Female
}

const groupBy = (arr: any[], callback: (call: any) => any) => {
  return arr.reduce((a, elm) => {
    const key = callback(elm);
    if (!a[key]) {
      a[key] = [];
    }
    a[key].push(elm);
    return a;
  }, {});
};

console.log("Пример 1:", groupBy([1.2, 1.1, 2.3, 0.4], Math.floor));

console.log(
  "Пример 2:",
  groupBy(["one", "two", "three"], (el) => el.length)
);

console.log(
  "Пример 3:",
  groupBy(
    [
      { g: Gender.Male, n: "A" },
      { g: Gender.Female, n: "B" },
      { g: Gender.Female, n: "C" }
    ],
    (el) => el.g
  )
);
