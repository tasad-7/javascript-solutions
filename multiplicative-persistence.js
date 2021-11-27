  const persistence = (value) => {
    let counter = 0
    let digits = value.toString().split("") // converting number to string so we can use split() method ["2", "7"]
    
    while(digits.length > 1){ // so we can stop when we hit single digit
      let result = 1 
      for (let i=0; i < digits.length; i++) {
        result = result * digits[i] 
        //1*2 =2
        //2*7=14
        //1*4
        //4
      }
      counter+=1 // incrementing persistence counter
      digits = result.toString().split("")
      
    }
    return counter //4  
  }


persistence(27)// function call
