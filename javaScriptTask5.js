var arr=[{"id":1,"name":"john","totalSalary":9000,"UpdatedSalary":""},
{"id":2,"name":"Mark","totalSalary":8000,"UpdatedSalary":""},
{"id":3,"name":"Yash","totalSalary":5000,"UpdatedSalary":""}];

populate();
function populate(){

    try{

        for(i=0;i<arr.length;i++)
        {
            arr[i].UpdatedSalary=arr[i].totalSalary*1.10;
            arr[i].UpdatedSalary=Number(arr[i].UpdatedSalary);
            
        }

    }catch(ex){
     alert("salary is not updated");
    }
}


    var txt="";
for(i=0;i<arr.length;i++)
{
txt="<tr><td>"+arr[i].id+"</td><td>"+arr[i].name+"</td><td>"+arr[i].totalSalary+"</td><td>"+arr[i].UpdatedSalary+"</td></tr>";
document.getElementById('display').innerHTML+=txt;
}

