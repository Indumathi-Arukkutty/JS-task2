var Sample = "Indumathi"

//to find length
document.getElementById("sample").innerHTML = "Length of the array \"" +Sample+ "\" : " +Sample.length;
console.log(Sample.length)

// to covert uppercse
console.log(Sample.toUpperCase())

//to convert Lowercase
console.log(Sample.toLowerCase())

//splitby method
var newarray = Sample.split("")
console.log(newarray)

//slice
console.log(Sample.slice(3,6))

//substr
document.getElementById("sample1").innerHTML = "Substring function in string is used : " +Sample.substring(1,7);
console.log(Sample.substring(1,8))

//replace
document.getElementById("sample2").innerHTML = "Replace function in string is used : " +Sample.replace("a","*");
console.log(Sample.replace("m","$"))

console.log(Sample.includes("indumathi")) 

//startwith method
console.log(Sample.startsWith("n"))

//endswith method
console.log(Sample.endsWith('i'))

// concat
console.log()



