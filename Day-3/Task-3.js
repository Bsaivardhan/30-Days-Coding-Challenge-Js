function getObject(obj) {
  let uniqueMarks = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let entry = obj[key];

      {
        let mark = entry.marks;

        if (!(mark in uniqueMarks) ) {
          uniqueMarks[mark] = entry;
        }
      }
    }
  }

  let result = {};

  let index = 0;
  for (let mark in uniqueMarks) {
    if (uniqueMarks.hasOwnProperty(mark)) {
      result[index] = uniqueMarks[mark];
      index++;
    }
  }

  return result;
}

let example1 = {
  0: { age: 18, name: "john", marks: "400" },
1: { age: 17, name: "julie", marks: "400" },
2: { age: 16, name: "Robin", marks: "200" },
3: { age: 16, name: "Bella", marks: "300" }
};

console.log(getObject(example1));

