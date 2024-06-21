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

function fibsRec(n) {
  const array = [];
  if (n < 2) {
    if (n < 1) return [];
    else return [0];
  } else if (n === 2) {
    array.push(0, 1);
    return array;
  } else {
    const newArr = array.concat(fibsRec(n - 1));
    let len = newArr.length;
    newArr.push(newArr[len - 1] + newArr[len - 2]);
    return newArr;
  }
}
