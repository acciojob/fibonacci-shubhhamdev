function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fibPrev = 0;
    let fibCurr = 1;
    let fibNext;

    for (let i = 2; i <= num; i++) {
      fibNext = fibPrev + fibCurr;
      fibPrev = fibCurr;
      fibCurr = fibNext;
    }

    return fibCurr;
	  console.log(fibonacci(num));
  }
}


module.exports = fibonacci;
