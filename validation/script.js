const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');


function validateName() {
    const name = document.getElementById('contact-name').value;
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = 'Wrire full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-cricle"></i>';
    return true;
        
}

function validateName() {
    const phone = document.getElementById('contct-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone no is required';
        return false
    }

    phoneError.innerHTML = '<i class="fas fa-check-cricle"></i>'
    return true;
}