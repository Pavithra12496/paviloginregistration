var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab =document.getElementById("lt");
var regTab = document.getElementById("rt");

var emailArray=[];
var passwordArray=[];

function loginTabFun()
{
    event.preventDefault();
    loginBox.style.visibility="visible";
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    loginTab.style.backgroundColor ="rgb(248, 34, 106)";
    regTab.style.backgroundColor=" rgb(124, 187, 29)";
}

function RegisterTabFun()
{
    event.preventDefault();
    loginBox.style.visibility="hidden";
    regBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgb(248, 34, 106)";
    loginTab.style.backgroundColor =" rgb(124, 187, 29)";
}

function forTabFun()
{
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    
}

function Login()
{
    event.preventDefault();
    var email =document.getElementById("se").value;
    var password =document.getElementById("sp").value;
    var i=emailArray.indexOf(email);
    if(emailArray.indexOf(email) ==-1)
    {
        if(email =="")
        {
            alert("Email required.");
            return;
        }
        alert("Email does not exist. Please try again.");
        return;
    }
    else if(passwordArray[i] != password)
    {
        if(password =="")
        {
            alert("Password required.");
            return;
        }
        alert("Password does not match. Please try again.");
        return;
    }
    else
    {
        alert(email + " Login successful.\n Welcome");
        document.getElementById("se").value="";
        document.getElementById("sp").value="";
    }

}

function Register()
{
    event.preventDefault();
    var email=document.getElementById("re").value;
    var password=document.getElementById("rp").value;
    var passwordRetype=document.getElementById("rrp").value;
    if(email =="")
    {
        alert("Email required");
        return;
    }
    else if(password=="")
    {
        alert("Password required");
        return;
    }
    else if(passwordRetype=="")
    {
        alert("password required");
        return;
    }
    else if(password != passwordRetype)
    {
        alert("Password does't match Retype your password");
        return;
    }
    else if(emailArray.indexOf(email) == -1)
    {
        emailArray.push(email); 
        passwordArray.push(password);
        alert(email + " Thanks for Registration. \n Try to login now");
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else
    {
        alert("Enter details properly");
        return;
    }
}

function forgot()
{
    event.preventDefault();
        var email = document.getElementById("fe").value;
    if(emailArray.indexOf(email) == -1)
    {
        if (email == "")
        {
            alert("Email required.");
            return ;
        }
        alert("Email does not exist. Please try again");
        return ;
    }
    alert("Email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}