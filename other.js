 //call concept
 function Subject(math, english){
    this.math = math;
    this.english = english;
 }
 function score( math, english, tamil ){
     Subject.call(this,math,english)
    this.tamil = tamil;
 }

 var val = new score(20, 24, 22)
 document.getElementById("sample1").innerHTML = "Call funtion is used to display student mark " +(val.english)

//apply concept
var number =[03,65,37,100,24]

document.getElementById("sample2").innerHTML = "Apply function is used to find max from array " +(Math.max.apply(null, number));
document.getElementById("sample3").innerHTML = "Apply function is used to find min from array " +(Math.min.apply(null, number));

//Destructuring -Array
var var1 =['a','b','c','d','e']
var [x,...y] = var1;

document.getElementById("sample4").innerHTML = "Array destructing using spread operator " +y[2];


//Destructure -Object
let stud ={
    name : "Indu",
    age : 23,
    gender :'F'
}
let {name,age,gender} = stud;
document.getElementById("sample5").innerHTML = "Object destructing " +age;