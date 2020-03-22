function jumpingOnClouds(c) {
  let jumps = 0;
  c.map((cloud, i) => {
    c[i + 2] === 0
      ? c.splice(i, 1)
      : null
    jumps++
  })
  return jumps - 1;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))