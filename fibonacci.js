function printFibo(index) {
  const series = [0, 1];

  for(let i = 0; i <= index; i++) {
    const next = series[i] + series[i + 1];
    series.push(next);

    if(series.length === index) {
      return series;
    }
  }
}

const indexOfTheNumberInSeries = 12;
console.log(printFibo(indexOfTheNumberInSeries));