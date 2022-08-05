var arr=[{"id":1,"name":"john","salary":""},{"id":2,"name":"mark","salary":""},{"id":1,"name":"yash","salary":""}];
console.log(arr);


function display(){
    "use strict"
    for(let i=0;i<arr.length;i++)
    {
        arr[i].salary=30000;
    }
    
}
display();
popuplate(arr);
function popuplate(arr){
    for(i=0;i<arr.length;i++)
    {
       txt="<tr><td>"+arr[i].id+"</td><td>"+arr[i].name+"</td><td>"+arr[i].salary+"</td></tr>";
       document.getElementById('tbody').innerHTML+=txt;
    }
}