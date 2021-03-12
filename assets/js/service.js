
var messagediv=document.getElementById("messagediv");
var messagePara=document.getElementById("messagepara");

function sendServiceRequest(request){

    phone=prompt("Please input your contact phone number");
    if(phone==undefined || phone==null || phone==""){
        messagePara.innerHTML="Invalid phone number, Could not process your request";
        messagediv.style.display="block";
        return;
    }
    $.ajax({
        method:"POST",
        url:"service.php",
        data:{"body":request, "phone":phone},
        success:function(data){
            messagePara.innerHTML=data;
        messagediv.style.display="block"; 
        }
    })
}

function closeDiv(){
    messagediv.style.display="none";
}