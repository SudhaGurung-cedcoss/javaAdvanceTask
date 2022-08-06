


class Employee{

     
    createjSon(args)
    {
      var arg=JSON.parse(args);
      var text="";
      for(let i=0;i<arg.length;i++)
      {
        this.id=arg[i].id;
        this.name=arg[i].name;
        this.totalSalary=arg[i].totalSalary;
        
       text="<tr><td>"+this.id+"</td><td>"+this.name+"</td><td>"+this.totalSalary+"</td></tr>";
        document.getElementById('display').innerHTML+=text;
      }

    }
};

var jsonArray='[{"id":1,"name":"John","totalSalary":9000},{"id":2,"name":"Mark","totalSalary":8000},{"id":3,"name":"Yash","totalSalary":7000}]';



let obj=new Employee();
obj.createjSon(jsonArray);





