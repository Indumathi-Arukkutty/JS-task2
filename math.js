
var val = 23.987


//round off the value
document.getElementById("sample1").innerHTML = "Round function returns the value of "+val+ " is : " +Math.round(val);
console.log("round" +Math.round(val))

//to round the value to nearest highvalue
document.getElementById("sample2").innerHTML = "Ceil function returns the value of "+val+ " is : " +Math.ceil(val);
console.log("Ceil" +Math.ceil(val))

//to round the value to nearest lowvalue
document.getElementById("sample3").innerHTML = "Floor function returns the value of "+val+ " is : " +Math.floor(val);
console.log("Floor" +Math.floor(val))

//to pick any random number in a series
document.getElementById("sample4").innerHTML = "Random function returns the value of is : " +Math.floor(Math.random()*50);
console.log(Math.floor(Math.random()*50))

//to find squareroot of a value
num1 = 16
document.getElementById("sample5").innerHTML = "Sqaureroot function returns the value of " +num1+ " is : " +Math.sqrt(num1);
console.log(Math.sqrt(num1))

//to find maximum of given value
document.getElementById("sample6").innerHTML = "Maximum function returns the value of is : " +Math.max(4,8,9,2,10);
console.log(Math.max(4,8,9,2,10))

//to find mimimum of given values
document.getElementById("sample7").innerHTML = "Minimum function returns the value of is : " +Math.min(4,8,9,2,10);
console.log(Math.min(4,8,9,2,10))

//returns the integer value 
var num = 98.0
document.getElementById("sample8").innerHTML = "Truncate value of "+num+ " is : " +Math.trunc(num);