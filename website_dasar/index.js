var email = document.getElementById('email');
var password = document.getElementById('password');

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validation(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}


function validation2(){
    if(document.Formfill.txtEmail.value==""){
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }
    else if(document.Formfill.txtUsername.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.txtUsername.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;

    }
    else if(document.Formfill.txtPwd.value==""){
        document.getElementById("result").innerHTML="Enter your password";
        return false;
    }
    else if(document.Formfill.txtPwd.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.txtConPwd.value==""){
        document.getElementById("result").innerHTML="Enter confirm password";
        return false;
    }
    else if(document.Formfill.txtConPwd.value!==document.Formfill.txtPwd.value){
        document.getElementById("result").innerHTML="Password does not matched";
        return false;
    }
}
