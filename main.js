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
  console.log('xArray: '+xArray)
  console.log('yArray: '+yArray)
  console.log('n: '+xArray.length)
  
  let n = xArray.length
let xbar = xArray.reduce((acc, ele) => {return acc + ele}, 0) / xArray.length
let ybar = yArray.reduce((acc, ele) => {return acc + ele}, 0) / yArray.length
console.log("xbar: "+xbar)
console.log('ybar: '+ybar)

var result = [];
for (var i = 0; i < xArray.length; i++) {
  result.push(xArray[i] * yArray[i]);
}
let XY = result.reduce((acc, ele) => {return acc + ele}, 0)
  console.log("XY array: "+result)
  console.log("sumXY: "+ XY)
  
  let top = XY - n * xbar * ybar
  console.log("sumXY - n (xbar) (ybar): "+top)
  
  let sumxtwo = xArray.reduce((acc, ele) => {return acc + ele ** 2}, 0)
  console.log('sumX²: '+sumxtwo)
  let sumytwo = yArray.reduce((acc, ele) => {return acc + ele ** 2}, 0)
  console.log('sumy²: '+sumytwo)
  let xbar_two = xbar ** 2
  console.log('xbar²: '+xbar_two)
  let ybar_two = ybar ** 2
  console.log('ybar²: '+ybar_two)
  
  let bottom = Math.sqrt(sumxtwo - n * xbar_two) * Math.sqrt(sumytwo - n * ybar_two)
  


  

document.querySelector('.solution').style.display = 'block'

console.log('solution = ',top / bottom)
  return (top) / (bottom)
  
                          }
