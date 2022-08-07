
let form = document.getElementById("form");
form.addEventListener("submit", checkDetails);

let user = JSON.parse(localStorage.getItem("userCredentials")) || [];
let login= JSON.parse(localStorage.getItem("Login"));
function checkDetails(){
    event.preventDefault();

    let mail = form.mail.value;
    let password = form.passkey.value;

    form.mail.value="";
    form.passkey.value="";

    let count=0;
 
   try{
    let x= user.filter((user)=>{
        return user.email==mail&&user.password==password;
    })
    if(x[0].email==mail&&x[0].password==password){
           
        window.location.href="index.html";
        
    }
    else{
       
    }
}catch{
    let alertt= document.getElementById("alertt")
    alertt.style="visibility: visible;"
}
    
}