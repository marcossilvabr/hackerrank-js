function rotLeft(a, d) {
  let finalArray = []
  for (let i = 0; i < a.length; ++i) {
    finalArray[i] = a[(i + d) % a.length]
  }
  return finalArray
}

console.log(rotLeft([33,47,70,37,8,53,13,93,71,72,51,100,60,87,97],13));