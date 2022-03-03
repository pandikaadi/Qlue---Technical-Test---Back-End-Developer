function getShape(num) {
  if(num > 0) {
    if(num % 2 === 0 && num % 3 === 0) return "CIRCLE STAR"
    else if(num % 2 === 0 && num % 3 !== 0) return "CIRCLE"
    else if(num % 2 !== 0 && num % 3 === 0) return "STAR"
    else return null
  } else return null
  
}

console.log(getShape(9))