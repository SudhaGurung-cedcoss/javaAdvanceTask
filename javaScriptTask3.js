class Employee{
    constructor(id,name,totalSalary)
    {
        this.id=id;
        this.name=name;
        this.totalSalary=totalSalary;
    }
}

let Employee1= new Employee(1,"ROHAN",15000);





var x = Employee1;
var b= JSON.stringify(x);
var jsonObject = JSON.parse(b); 
console.log(jsonObject);
