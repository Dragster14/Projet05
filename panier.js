// Validation formulaire
function validate_form () {
    let error = document.querySelector('#error');
    let lastName = document.querySelector('#lastname');
    let firstName = document.querySelector('#firstname');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let address = document.querySelector('#address');
    let city = document.querySelector('#city');
    let zip = document.querySelector('#zip');
    let state = document.querySelector('#state');
    let checkBox = document.querySelector('#checkbox').checked;

    if (lastName.value === '' || lastName.value == null) {
        error.innerHTML = 'Nom requis';
        lastName.style.borderColor = "red";
        lastName.style.boxShadow = "0px 0px 8px red";
        lastName.focus();
        return false;
    } else {
        error.innerHTML = "";
        lastName.style.borderColor = "green";
        lastName.style.boxShadow = "";
    }

    if (firstName.value === '' || firstName.value == null) {
        error.innerHTML = 'Prénom requis';
        firstName.style.borderColor = "red";
        firstName.style.boxShadow = "0px 0px 8px red";
        firstName.focus();
        return false;
    } else {
        error.innerHTML = "";
        firstName.style.borderColor = "green";
        firstName.style.boxShadow = "";
    }

    if (email.value === '' || email.value == null) {
        error.innerHTML = 'Email requis';
        email.style.borderColor = "red";
        email.style.boxShadow = "0px 0px 8px red";
        email.focus();
        return false;
    } else {
        error.innerHTML = "";
        email.style.borderColor = "green";
        email.style.boxShadow = "";
    }

    if (phone.value === '' || phone.value == null) {
        error.innerHTML = 'N° de téléphone requis';
        phone.style.borderColor = "red";
        phone.style.boxShadow = "0px 0px 8px red";
        phone.focus();
        return false;
    } else {
        error.innerHTML = "";
        phone.style.borderColor = "green";
        phone.style.boxShadow = "";
    }

    if (address.value === '' || address.value == null) {
        error.innerHTML = 'Adresse requise';
        address.style.borderColor = "red";
        address.style.boxShadow = "0px 0px 8px red";
        address.focus();
        return false;
    } else {
        error.innerHTML = "";
        address.style.borderColor = "green";
        address.style.boxShadow = "";
    }

    if (city.value === '' || city.value == null) {
        error.innerHTML = 'Ville requise';
        city.style.borderColor = "red";
        city.style.boxShadow = "0px 0px 8px red";
        city.focus();
        return false;
    } else {
        error.innerHTML = "";
        city.style.borderColor = "green";
        city.style.boxShadow = "";
    }

    if (zip.value === '' || zip.value == null) {
        error.innerHTML = 'Code postal requis';
        zip.style.borderColor = "red";
        zip.style.boxShadow = "0px 0px 8px red";
        zip.focus();
        return false;
    } else {
        error.innerHTML = "";
        zip.style.borderColor = "green";
        zip.style.boxShadow = "";
    }

    if (state.value === '' || state.value == null) {
        error.innerHTML = 'Pays requis';
        state.style.borderColor = "red";
        state.style.boxShadow = "0px 0px 8px red";
        state.focus();
        return false;
    } else {
        error.innerHTML = "";
        state.style.borderColor = "green";
        state.style.boxShadow = "";
    }

    if (checkBox == false && lastName.value === '' || lastName.value == null && firstName.value === '' || firstName.value == null && email.value === '' || email.value == null && phone.value === '' || phone.value == null && address.value === '' || address.value == null && city.value === '' || city.value == null && zip.value === '' || zip.value == null && state.value === '' || state.value == null) {
        return false;
    } else if (checkBox == false && lastname.value != '' && lastName.value != null && firstName.value != '' && firstName.value != null && email.value != '' && email.value != null && phone.value != '' && phone.value != null && address.value != '' && address.value != null && city.value != '' && city.value != null && zip.value != '' && zip.value != null && state.value != '' && state.value != null) {
        alert("Merci de lire et d'accepter les conditions générales de vente pour pouvoir continuer.");
        return false;
    }

    return true;
}

