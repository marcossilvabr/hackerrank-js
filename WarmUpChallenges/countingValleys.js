function countingValleys(n, s) {
  let valleys = 0;
  let currentAltitude = 0;
  let currentStep = 0;
  do {
    let step = s[currentStep]
    if (step === 'U') {
      currentAltitude++
      if (currentAltitude === 0) {
        valleys++
      }
    } else {
      currentAltitude--
    }
    currentStep++
  } while(currentStep <= n)
  return valleys;
}

const countingValleys2 = (n, s) => {
  let valleys = 0;
  let currentAltitude = 0;
  const inArray = s.split('');
  inArray.map((step) => {
    if (step === 'U') {
      currentAltitude++
      if (currentAltitude === 0) {
        valleys++
      }
    } else {
      currentAltitude--
    }
  })
  return valleys;
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'))
console.log(countingValleys2(12, 'DDUUDDUDUUUD'))