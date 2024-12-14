let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let passInput=document.getElementById('passInput');
let signupBtn=document.getElementById('signupBtn');



// --------sign up------
if (localStorage.getItem('signupData')==null) {
    var cartona=[]
}
else{
    cartona=JSON.parse(localStorage.getItem('signupData'))
}

function validation(ele){
    var regex={
        nameInput:/[a-z]/i,
        emailInput:/[a-z]/i,
        passInput:/[a-z]|[0-9]/i
    }
    if(regex[ele.id].test(ele.value)){
        return true
    }
    else{
        return false
    }

}

signupBtn.addEventListener('click',function signup(){
    if(validation(nameInput)&& validation(emailInput)&&validation(passInput)){
    let signupContent={ 
        signupName:nameInput.value,
        signupEmail:emailInput.value,
        signupPass:passInput.value
    }
    cartona.push(signupContent);
    localStorage.setItem('signupData',JSON.stringify(cartona));
    document.querySelector('#required').classList.add('d-none');
    let success= document.querySelector('span');
    success.classList.replace('d-none','d-flex');
    clear()

    console.log(cartona);
    }
    else{
    document.querySelector('#required').classList.remove('d-none');
    success.classList.replace('d-flex','d-none')
    }
})
function clear(){
    nameInput.value=null
    emailInput.value=null
    passInput.value=null
}




   
   
   


