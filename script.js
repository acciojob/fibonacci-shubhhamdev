function fibonacci(num) {
// your code here
	if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    var sequence = [0, 1];
    for (var i = 2; i < num; i++) {
      var next = sequence[i - 1] + sequence[i - 2];
      sequence.push(next);
    }
    return sequence;
  }
}

module.exports = fibonacci;
