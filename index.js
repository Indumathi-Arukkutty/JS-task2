var food=["dosa","idly","poori","chappathi"]
var drinks = ["Juice","tea","coffee"]


// concat two rray
document.getElementById("sample5").innerHTML = "Concatination function to merge array values : " +food.concat(drinks);

//to know the count 
document.getElementById("sample3").innerHTML = "Length of array is : " + food.length;
console.log("length of array : " +food.length)

//to find first value
console.log("first value in arrray: " +food[0]);

console.log( "orginal array : " +food)

//to change index value
food[1]="idiyapam"
console.log("index exaample : " +food)

//to change last value 
food[-1] = "parotta"
console.log(food)

//push the last value in array
food.push("roti")
console.log(food) 

//reverse method
console.log(food.reverse())

// splice to get specific set arrray values
document.getElementById("sample4").innerHTML = "Splice function to select set of array : " + food.splice(0,2);
console.log(food.splice(0,2))

//concat 2 array

var newarray = food.concat(drinks)
console.log(newarray)
