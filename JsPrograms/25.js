// Only change code below this line
function countDown(n){
    if (n <1) {
      return [];
    }
    else {
      const arrayNumber = countDown(n-1);
      arrayNumber.unshift(n);
      return arrayNumber
    }
  }
  console.log( countDown(10));
  // Only change code above this line


  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }