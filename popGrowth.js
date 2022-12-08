const nbYear = (p0, percent, aug, p) => {
    percent= percent/100;
    let count=0;
    let inhabitants = 0;
    while(p0 < p) {
      inhabitants = p0 + (p0 * percent) + aug;
      p0 = inhabitants
      count++
    }
    return count
  }
  console.log(nbYear(1500, 5, 100, 5000))
  console.log(nbYear(1500000, 2.5, 10000, 2000000))