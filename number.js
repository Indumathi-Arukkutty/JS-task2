var num1 =80;

// type of orginal value
document.getElementById("sample9").innerHTML = "Type of convertion " +num1+ " is : " + typeof(num1);
console.log(typeof(num1))

// type converstion to string
document.getElementById("sample10").innerHTML = " Number convertion " +num1+ " to string : " + typeof(num1.toString());


//to convert string, number, parseInt, parsefloat
var num2 = 34
document.getElementById("sample11").innerHTML = " Number convertion " +num2+ " to parseInt : " +typeof(parseInt(num2));
console.log(typeof(parseFloat(num2)))

var rupee = 59.9912000

//tofixed decimal point
document.getElementById("sample12").innerHTML = " Number with fixed decimal " +rupee+ " is : " +rupee.toFixed(4);
console.log(rupee.toFixed(5))