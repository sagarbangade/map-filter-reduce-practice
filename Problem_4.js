let arr = [1, 2, 3, 4, 5];

let output = arr
  .filter((element) => {
    return element % 2 == 0;
  })
  .map((element) => {
    return element ** 2;
  })
  .reduce((sum, element) => {
    return (sum += element);
  });

console.log(output);
