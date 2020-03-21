function countingValleys(n, s) {
    let valleys = 0
    let currentAltitude = 0
    let currentStep = 0
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
  
  console.log(countingValleys(12, 'DDUUDDUDUUUD'))