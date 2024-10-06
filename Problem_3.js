let arr = [5, 10, 15, 20];

let output = arr.reduce((sum, element) => {
  return (sum += element);
});

console.log(output);
