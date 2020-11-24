function rangeOfNumbers(startNum, endNum) {

  if(startNum === endNum )  {
    return [startNum]
    // console.log([startNum])
  } else if (startNum < endNum){
    let numbers = rangeOfNumbers(startNum+1, endNum)
    numbers.push(startNum)
    console.log(numbers)
    return numbers
  }
    
  
  // console.log(range)
};


rangeOfNumbers(1,5)


