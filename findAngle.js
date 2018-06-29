// for e.g. at 1.55PM hour = 1, min = 55 and it should return the exact angle between hour hand and min hand
function findAngle(hour, min) {
  let eachIntervalInDeg = 360 / 12;
  let distanceCoveredByMinHand = (min / 5) * eachIntervalInDeg;
  let distanceCoveredByHourHand = (hour + ((( min / 12)) / 5))  * eachIntervalInDeg;
  
  return (360 - distanceCoveredByMinHand) + distanceCoveredByHourHand;
}

console.log(findAngle(1, 55));
