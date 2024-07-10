let emails = document.getElementById('email');
let passwords = document.getElementById('pass');
let Login = document.getElementById('login');
let emailerror=document.getElementById('emailerror');
let passerror=document.getElementById('passerror');
let message = document.getElementById('status');
let arr2 =JSON.parse(localStorage.getItem('item'));
let r=0;

function login(){
        
        let inform = {
            email: emails.value,
            password: passwords.value
        };
        emailerror.style.display = 'none';
        passerror.style.display = 'none';
        let valid=true;

        if (!inform.email) {
            emailerror.style.display = 'block';
            emailerror.classList.remove('text-success');
            emailerror.classList.add('text-danger');
            emailerror.innerHTML = 'Email is required';
            valid = false;
        } else if (inform.email.length < 6) { // Example: Minimum length of 5 characters for email
            emailerror.style.display = 'block';
            emailerror.classList.remove('text-success');
            emailerror.classList.add('text-danger');
            emailerror.innerHTML = 'Email must be at least 5 characters';
            valid = false;
        }
    
        if (!inform.password) {
            passerror.style.display = 'block';
            passerror.classList.remove('text-success');
            passerror.classList.add('text-danger');
            passerror.innerHTML = 'Password is required';
            valid = false;
        } else if (inform.password.length < 8) {
            passerror.style.display = 'block';
            passerror.classList.remove('text-success');
            passerror.classList.add('text-danger');
            passerror.innerHTML = 'Password must be at least 8 characters';
            valid = false;
        }
    
    

        if(valid){
            let index = arr2.findIndex(user => user.email === inform.email && user.password === inform.password);
            if (index!=-1) {
                localStorage.setItem('index',JSON.stringify(index));    
                window.open('home.html','_self');
                clear();
            } 
            else {
                message.classList.remove('text-success');
                message.classList.add('text-danger');
                message.innerHTML = 'Email or Password is not correct';
                clear();
            }
        }
        else{
            message.innerHTML = '';
        }
    }



function clear() {
    emails.value = '';
    passwords.value = '';
}

Login.addEventListener('click', login);
