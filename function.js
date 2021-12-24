// Arrow function 
let welcome = (name) => `Welcome to arrow function in JS - ${name}`;
document.getElementById("sample").innerHTML = (welcome("Indu"))

//default parameter in function
function defpara(name, age= 24){
    return `Name is ${name} age is ${age}`;
}
document.getElementById("sample1").innerHTML = (defpara("Shan"))


// class example
class Student {
    constructor(stdname){
        this.stdname = stdname
    }
    displayStudentname(){
        return `Student name is ${this.stdname}`
    }
}
//Object created for Class
let obj1 = new Student("Radha");
document.getElementById("sample2").innerHTML =(obj1.displayStudentname())


