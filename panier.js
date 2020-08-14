// Validation formulaire
let error = document.querySelector('#error');
let form = document.querySelector('#form');
let lastname = document.querySelector('#lastname');
let firstname = document.querySelector('#firstname');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let address = document.querySelector('#address');
let city = document.querySelector('#city');
let zip = document.querySelector('#zip');
let state = document.querySelector('#state');

form.addEventListener('submit', (e) => {
    let messages = []

    if (lastname.value === '' || lastname.value == null) {
        messages.push('Nom requis');
        lastname.style.borderColor = "red";
    } else {
        lastname.style.borderColor = "green";
    }

    if (firstname.value === '' || firstname.value == null) {
        messages.push('Prénom requis');
        firstname.style.borderColor = "red";
    } else {
        firstname.style.borderColor = "green";
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email requis');
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "green";
    }

    if (phone.value === '' || phone.value == null) {
        messages.push('N° de téléphone requis');
        phone.style.borderColor = "red";
    } else {
        phone.style.borderColor = "green";
    }

    if (address.value === '' || address.value == null) {
        messages.push('Adresse requise');
        address.style.borderColor = "red";
    } else {
        address.style.borderColor = "green";
    }

    if (city.value === '' || city.value == null) {
        messages.push('Ville requise');
        city.style.borderColor = "red";
    } else {
        city.style.borderColor = "green";
    }

    if (zip.value === '' || zip.value == null) {
        messages.push('Code postal requis');
        zip.style.borderColor = "red";
    } else {
        zip.style.borderColor = "green";
    }

    if (state.value === '' || state.value == null) {
        messages.push('Pays requis');
        state.style.borderColor = "red";
    } else {
        state.style.borderColor = "green";
    }

    if (messages.length > 0) {
        error.innerText = messages.join(', ');
        e.preventDefault();
    }
})

function is_checked() {
    let checkbox = document.querySelector('#checkbox').checked;

    if (checkbox == false && lastname.value === '' || lastname.value == null && firstname.value === '' || firstname.value == null && email.value === '' || email.value == null && phone.value === '' || phone.value == null && address.value === '' || address.value == null && city.value === '' || city.value == null && zip.value === '' || zip.value == null && state.value === '' || state.value == null) {
        return false;
    } else if (checkbox == false && lastname.value != '' && lastname.value != null && firstname.value != '' && firstname.value != null && email.value != '' && email.value != null && phone.value != '' && phone.value != null && address.value != '' && address.value != null && city.value != '' && city.value != null && zip.value != '' && zip.value != null && state.value != '' && state.value != null) {
        alert("Merci de lire et d'accepter les conditions générales de vente pour pouvoir continuer.");
        return false;
    }
}

