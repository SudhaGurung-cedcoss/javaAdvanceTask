
 var arr=[];
 
function add(){
   
    Id=document.getElementById('ID').value;
    Username=document.getElementById('name').value;
  totalSalary=document.getElementById('basicSalary').value;
 
  arr.push({id:Id,uname:Username,total:totalSalary});
   

   

    
    console.log(arr);
    
    showData(arr);
}

function showData(arr){
    text="";
    for(i=0;i<arr.length;i++)
    {
        text+='<tr>'+'<td>'+arr[i].id+'</td>'+'<td>'+arr[i].uname+'</td>'+'<td>'+arr[i].total+'</td>'+"<td><button onclick='del(this)'>Delete</button></td>"+'</tr>';
        
    }
    document.getElementById('tbody').innerHTML=text;
}


function del(args){
    let tr=args.closest('tr');
    let nodes=Array.from(tr.closest('tbody').children);
    let index=nodes.indexOf(tr);
    alert(index);
   
   arr.splice(index,1);
   showData(arr);
   
    
    
}

   

