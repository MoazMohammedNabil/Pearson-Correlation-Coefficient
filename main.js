let btn = document.getElementById('btn')
let inputX = document.getElementById('inputX')
let inputY = document.getElementById('inputY')


btn.onclick = func
function func() {
  Pearson_correlation_coefficient(inputX.value, inputY.value)
}

function Pearson_correlation_coefficient(x,y) {
  let xArray = x.split(',').map(Number);
  let yArray = y.split(',').map(Number);
  

var result = [];
for (var i = 0; i < xArray.length; i++) {
  result.push(xArray[i] * yArray[i]);
}
let one = result.reduce((acc, ele) => {return acc + ele}, 0) 
  console.log("sumXY array: "+result)
  console.log("sumXY: "+ one)
  
  
let two =  xArray.reduce((acc, ele) => {return acc + ele}, 0) * yArray.reduce((acc, ele) => {return acc + ele}, 0) / xArray.length
console.log("sumX * sumY: " + two * xArray.length)
console.log("sumX * sumY / n: " + two)

  
let three = xArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) * (xArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) / xArray.length)
console.log("x²: "+xArray.reduce((acc, ele) => {return acc + ele ** 2}, 0))
console.log("x² / n: "+(xArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) / xArray.length))
console.log("x² * (x² / n): "+three)
console.log("✓x² * (x² / n): "+Math.sqrt(three))

  
let four = yArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) * yArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) / xArray.length
console.log("y²: "+yArray.reduce((acc, ele) => {return acc + ele ** 2}, 0))
console.log("y² / n: "+(yArray.reduce((acc, ele) => {return acc + ele ** 2}, 0) / xArray.length))
console.log("y² * (y² / n): "+four)
console.log("✓y² * (y² / n): "+Math.sqrt(four))

document.querySelector('.solution').style.display = 'block'
  return (one * two) / (Math.sqrt(three) * Math.sqrt(four))
  
}