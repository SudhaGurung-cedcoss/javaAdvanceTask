


var jsonArray={
    "employee":[{"id":1,"name":"John","totalSalary":9000},
    {"id":2,"name":"Mark","totalSalary":8000},
    {"id":3,"name":"Yash","totalSalary":7000}],
    
};
var text=my();
var txt="";
for(i=0;i<text.length;i++)
{
txt="<tr><td>"+text[i].id+"</td><td>"+text[i].name+"</td><td>"+text[i].totalSalary+"</td></tr>";
document.getElementById('display').innerHTML+=txt;
}

function my(){
return (this.jsonArray.employee);
}
