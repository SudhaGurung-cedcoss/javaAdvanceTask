class Employee{
    constructor(id,name,totalSalary)
    {
        this.id=id;
        this.name=name;
        this.totalSalary=totalSalary;
    }
}

let Employee1= new Employee(1,"ROHAN",15000);
 text="";
text='<tr>'+'<td>'+Employee1.id+'</td>'+'<td>'+Employee1.name+'</td>'+'<td>'+Employee1.totalSalary+'</td>'+'</tr>';
document.getElementById('display').innerHTML=text;
