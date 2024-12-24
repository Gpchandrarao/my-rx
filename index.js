// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function rgbBallsSort(arr) {
  let low = 0;
  let mid = 0;
  let length = arr.length - 1;
  while (mid <= length) {
    if (arr[mid] === "B") {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === "G") {
      mid++;
    } else if (arr[mid] === "R") {
      [arr[mid], arr[length]] = [arr[length], arr[mid]];
      length--;
    }
  }
  return arr;
}

const arr = ["R", "G", "B", "G", "G", "B", "R", "B", "G"];
const result = rgbBallsSort(arr);
console.log(result);
