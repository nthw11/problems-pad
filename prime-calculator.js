function sumPrimes(num) {
  let primeSum = []
  for(let x=1;x<=num;x++)  {
    let flag = 0
    for(let i=2;i<x;i++){
      if(x % i === 0){
        flag=1
        break
        // primeSum.push(x)
      }
    }
    if (x>1 && flag ==0){
      primeSum.push(x)
    }
  }
  // console.log(primeSum.reduce((a, b) => a + b, 0))
  return primeSum.reduce((a,b)=>a+b,0)
}

sumPrimes(14);