function fibs(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) array.push(i);
    else if (i === 1 || i === 2) array.push(1);
    else {
      let len = array.length;
      array.push(array[len - 1] + array[len - 2]);
    }
  }
  return array;
}
