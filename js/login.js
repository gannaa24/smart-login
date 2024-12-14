let loginInput = document.getElementById('loginInput');
let loginPassInput = document.getElementById('loginPassInput');
let loginBtn = document.getElementById('LoginBtn');
let incorrect= document.getElementById('incorrect')

let loginContainer = [];
loginBtn.addEventListener('click', function () {
    let loginContent = {
        loginInput: loginInput.value,
        loginPassInput: loginPassInput.value
    };

    loginContainer.push(loginContent);
    let loginData = JSON.parse(localStorage.getItem('signupData')) || [];

    let isAuthenticated = loginData.some(user => user.signupEmail === loginContent.loginInput && user.signupPass === loginContent.loginPassInput);

    if (isAuthenticated) {
        let x =JSON.parse(localStorage.getItem('signupData'));
        for (let i = 0; i < localStorage.length; i++) {
            
            let y= x[i].signupName;
            localStorage.setItem('userName',y)
            window.location.href = 'homepage.html';
            
        }
            clearLogin()
        
    } else {
        incorrect.classList.remove('d-none');
        
    }
});



function clearLogin(){
    loginInput.value=null
    loginPassInput.value=null
}