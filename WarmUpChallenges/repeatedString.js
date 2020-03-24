function repeatedString(s, n) {
  let aCount = 0;
  let aCountOutOfLoop = 0;
  const remainder = n % s.length

  const splitted = s.split('')
  splitted.map((e, i) => {
    if (e === 'a') {
      aCount++
      if (i < remainder) {
        aCountOutOfLoop++
      }
    }
  })

  return (((n - remainder) / s.length) * aCount) + aCountOutOfLoop
}

console.log(repeatedString('aba', 10))
console.log(repeatedString('ceebbcb', 817723))