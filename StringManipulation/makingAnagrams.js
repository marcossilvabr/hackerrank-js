const makeAnagram = (a, b) => {
  let count = 0;
  const aSplit = a.split('');
  const bSplit = b.split('');
  const checkIfIncludes = (c, d) => {
    for (let i = 0; i <= c.length; i++) {
      if (d.includes(c[i])) {
        count = count + 2
        d.splice(d.indexOf(c[i]), 1, '');
        c.splice(c.indexOf(c[i]), 1, '');
      }
    }
  }
  checkIfIncludes(aSplit, bSplit);
  return (aSplit.length + bSplit.length) - count;
}

console.log(makeAnagram('cde', 'abc')) // 4
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')) // 30