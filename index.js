function add(x) {
  const regex = /^[0-9]{1,4}([,][0-9]{1,4})?$/;
  const regex2 = /[-]\d/;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (x === undefined) {
    throw new Error('No input.');
  } else if (x === '') {
    return 0;
  } else if (x.match(regex2)) {
    throw new Error(`Negative numbers are not allowed: [${x.match(regex2)[0]}]`);
  } else if (regex.test(x) === false) {
    throw new Error('Invalid input.');
  } else {
    const old = x.split(',');
    const newArr = old.map(i => parseInt(i, 10));
    for (const index of newArr) {
      if (index > 1000) {
        let position = newArr.indexOf(index);
        newArr[position] = 0;
        return newArr.reduce(reducer, 0).toString();
      } else {
        return newArr.reduce(reducer, 0).toString();
      }
    }
  }
}

module.exports.add = add;
