


 
function add(){

var id=document.getElementById('id').value;
 var Name=document.getElementById('name').value;
 var basicSalary=document.getElementById('basicSalary').value;

var username=/^[a-z A-Z]+$/;
var number=/^[0-9]+$/;
    try{
        if(id =="" || basicSalary=="")
        {
            throw "ID cannot be empty";         
        }
        else{
            document.getElementById('form').innerHTML="";
        }
    }
    catch(err) {
        document.getElementById('form').innerHTML="all Field must be filled";
     
    }
    
    try{
        if(Name.match(username)){
          document.getElementById('nameError').innerHTML="";
        }
       else{
         throw "invalid expression"
       }
     }
     catch(err){
     document.getElementById('nameError').innerHTML=err;
     document.getElementById('nameError').style.color=red;
    } 
   
}