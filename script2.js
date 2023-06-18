const indicator = document.querySelector("[data-indicator]");
const value=document.addEventListener("p1");
const submit_button = document.querySelector(".submit-btn");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("name").value;
    const lname = document.getElementById("email").value;
    const email = document.getElementById("Age").value;
    const pass = document.getElementById("Weight").value;
    const cpass = document.getElementById("Height").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);
}


var val1;
setIndicator("rgb(6, 6, 44)");
function password1(val){
console.log(val);
 val1=val;
 
    if(val.length> 8){

        setIndicator("#0f0");
    }
    if(val.length< 8 &&val.length>4){
        setIndicator("#ff0");
    }
    if(val.length<4){

    setIndicator("#f00");
    }
    }
    function cpassword(val){
if( val1!==val){
    console.log(val);
    alert("Worng password")
}


    }
function setIndicator(color) {

    indicator.style.backgroundColor = color;
    indicator.style.boxShadow='0px 0px 12px 1px ${color}';
}



