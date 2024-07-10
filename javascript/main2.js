let names = document.getElementById('nam');
let emails = document.getElementById('ema');
let passwords = document.getElementById('pass');
let nameerror = document.getElementById('nameerror');
let emailerror = document.getElementById('emailerror');
let passerror = document.getElementById('passerror');
let Signup = document.getElementById('signup');
let message = document.getElementById('status');
let arr = [];

function signup() {
    if (localStorage.getItem('item') !== null) {
        arr = JSON.parse(localStorage.getItem('item'));
    }

    let regex = {
        namevalid: /^[a-zA-Z\s]{3,}$/i,
        emailvalid: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    };

    let inform = {
        name: names.value,
        email: emails.value,
        password: passwords.value
    };

    let valid = true; // Corrected variable name

    nameerror.style.display = 'none';
    emailerror.style.display = 'none';
    passerror.style.display = 'none';

    if (!inform.name) {
        nameerror.style.display = 'block';
        nameerror.classList.remove('text-success');
        nameerror.classList.add('text-danger');
        nameerror.innerHTML = 'Name is required';
        valid = false;
    } else if (inform.name.length < 3) {
        nameerror.style.display = 'block';
        nameerror.classList.remove('text-success');
        nameerror.classList.add('text-danger');
        nameerror.innerHTML = 'Name must be at least 3 characters';
        valid = false;
    }

    if (!inform.email) {
        emailerror.style.display = 'block';
        emailerror.classList.remove('text-success');
        emailerror.classList.add('text-danger');
        emailerror.innerHTML = 'Email is required';
        valid = false;
    } else if (inform.email.length < 6) {
        emailerror.style.display = 'block';
        emailerror.classList.remove('text-success');
        emailerror.classList.add('text-danger');
        emailerror.innerHTML = 'Email must be at least 6 characters';
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

    if (valid) {
        if (regex.namevalid.test(inform.name) && regex.emailvalid.test(inform.email)) {
            let userExists = arr.some(user => user.email === inform.email);
            if (userExists) {
                message.classList.remove('text-success');
                message.classList.add('text-danger');
                message.innerHTML = 'The user already exists';
            } else {
                arr.push(inform);
                localStorage.setItem('item', JSON.stringify(arr));
                window.open('index.html', '_self');
                clear();
            }
        } else {
            message.classList.remove('text-success');
            message.classList.add('text-danger');
            message.innerHTML = 'Failed input validation. Please try again.';
        }
    } else {
        message.innerHTML = ''; 
    }
}

function clear() {
    names.value = '';
    emails.value = '';
    passwords.value = '';
}

Signup.addEventListener('click', signup);
