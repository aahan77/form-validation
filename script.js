const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
 const password = document.getElementById('password');
 const cpassword = document.getElementById('cpassword');

 form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
 })
const sendData = (usernameVal,sRate,count)=>{
if(sRate===count){
    // alert("Registration successfull")
    swal ( "Welcome-" + usernameVal ,  "Registration successful" ,  "success" )
}
}
 //for final validation

 const successMsg =(usernameVal)=>{
let formCon = document.getElementsByClassName('form-control');
var count = formCon.length-1
for(var i=0;i<formCon.length;i++){
    if(formCon[i].className=== "form-control success"){
        var sRate = 0 +i ;
sendData(usernameVal,sRate,count);
    }else{
        return false;
    }
}
 }

 const isEmail = (emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot<= atSymbol +2)
        return false;

 if(dot === emailVal.length -1) return false;

 if(emailVal.charAt(emailVal.length-4)!='.')
 return false;
//  if(emailVal==","||">"||"<"||"{"||"}"||"&"||"*"||"#"||"%"||"^"||"+")
//  return false
//  if(emailVal.charAt(emailVal.length-3)!='.')
//  return false;

 return true;
    
 }
 const validate =()=>{
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const phoneVal = phone.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal ===""){
        setErrorMsg(username, "Username can not be blank");
    }else if(usernameVal.length<=2 ){
        setErrorMsg(username,'Username min 3 char');
    }else if(emailVal===usernameVal){
        setErrorMsg(username,"Username can not be email")
    }
    else{
        setSuccessMsg(username);
    }

    if(emailVal ===""){
        setErrorMsg(email, "Email can not be blank");
    }else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid email');
    }else{
        setSuccessMsg(email);
    }
    if(phoneVal ===""){
        setErrorMsg(phone, "Number can not be blank");
    }else if(phoneVal.length !==10){
        setErrorMsg(phone,'Not a valid number');
    }else{
        setSuccessMsg(phone);
    }
    if(passwordVal ===""){
        setErrorMsg(password, "Password can not be blank");
    }else if(password.length <=5){
        setErrorMsg(password,'Mininmun 6 character');
    }else{
        setSuccessMsg(password);
    }
    if(cpasswordVal ===""){
        setErrorMsg(cpassword, "Confirm password can not be blank");
    }else if(passwordVal!==cpasswordVal){
        setErrorMsg(cpassword,'Password not matched');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal)
 }

 function setErrorMsg(input , errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
formControl.className="form-control error";
    small.innerText = errormsgs;


 }

 function  setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className="form-control success";
 }