let addToCart = document.querySelectorAll('#add-to-cart');

let products = [
    {
        name: 'Caméra Expert XX',
        tag: 'cameraexpertxx',
        price: 700,
        inCart: 0
    },
    {
        name: 'Caméra Puissante',
        tag: 'camerapuissante',
        price: 599.99,
        inCart: 0
    },
    {
        name: 'Caméra Créative',
        tag: 'cameracreative',
        price: 499.99,
        inCart: 0
    },
    {
        name: 'Caméra Performante',
        tag: 'cameraperformante',
        price: 399.99,
        inCart: 0
    },
    {
        name: 'Caméra Ultra Rapide',
        tag: 'cameraultrarapide',
        price: 299.99,
        inCart: 0
    }
]

for (let i=0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', () => {
        let lens = parseInt(document.querySelector('#lens').selectedOptions[0].value, 4)
    
        if (lens >= 1) {
            cartNumbers(products[i]);
            totalCost(products[i]);
            alert('Article correctement ajouté au panier !')
        } else {
            alert('Veuillez choisir une lentille pour continuer.')
        }  
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        //maybe
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        //maybe-end
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('#products');
    let totalProducts = document.querySelector('#total-products');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        document.querySelector('#submit-btn').removeAttribute('disabled');
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <th scope="row">
                <span>${item.name}</span>
            </th>
            <td class="text-center">
                <span>${item.inCart}</span>
            </td>
            <td class="text-center">
                <span>--</span>
            </td>
            <td class="text-center">
                ${item.price} €
            </td>
            `
        });

        totalProducts.innerHTML += `
            <th class="text-center">
                    ${cartCost} €
            </th>
        `
    } else {
        document.querySelector('#empty-cart').innerHTML = `
            <article id="empty-cart" class="container">
                <div class="jumbotron jumbotron-fluid"\>
                    <div class="container"\>
                        <h1 class="display-4 mb-5">Votre panier est vide :(</h1\>
                    </div\>
                </div\>
            </article>
        `
    }
}

onLoadCartNumbers();
displayCart();


// Validation formulaire
let lastName = document.querySelector('#lastname');
let errorLastName = document.querySelector('#error-lastname');
let lastNameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let firstName = document.querySelector('#firstname');
let errorFirstName = document.querySelector('#error-firstname');
let firstNameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let email = document.querySelector('#email');
let errorEmail = document.querySelector('#error-email');
let emailValid = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

let phone = document.querySelector('#phone');
let errorPhone = document.querySelector('#error-phone');
let phoneValid = /^0\d{9}$/;

let address = document.querySelector('#address');
let errorAddress = document.querySelector('#error-address');

let city = document.querySelector('#city');
let errorCity = document.querySelector('#error-city');
let cityValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let zip = document.querySelector('#zip');
let errorZip = document.querySelector('#error-zip');
let zipValid = /^\d{5}$/;

let state = document.querySelector('#state');
let errorState = document.querySelector('#error-state');
let stateValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let checkBox = document.querySelector('#checkbox');

let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', validForm);

function validForm(event) {
    
    if (lastName.value === '' || lastName.value == null) {
        errorLastName.innerHTML = 'Nom requis';
        lastName.style.borderColor = "red";
        lastName.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
        } else if (lastNameValid.test(lastName.value) == false){
        errorLastName.innerHTML = 'Format incorrect';
        lastName.style.borderColor = "red";
        lastName.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorLastName.innerHTML = "";
        lastName.style.borderColor = "green";
        lastName.style.boxShadow = "";
    }

    if (firstName.value === '' || firstName.value == null) {
        errorFirstName.innerHTML = 'Prénom requis';
        firstName.style.borderColor = "red";
        firstName.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (firstNameValid.test(firstName.value) == false){
        errorFirstName.innerHTML = 'Format incorrect';
        firstName.style.borderColor = "red";
        firstName.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorFirstName.innerHTML = "";
        firstName.style.borderColor = "green";
        firstName.style.boxShadow = "";
    }

    if (email.value === '' || email.value == null) {
        errorEmail.innerHTML = 'Email requis';
        email.style.borderColor = "red";
        email.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (emailValid.test(email.value) == false){
        errorEmail.innerHTML = 'Format incorrect';
        email.style.borderColor = "red";
        email.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorEmail.innerHTML = "";
        email.style.borderColor = "green";
        email.style.boxShadow = "";
    }

    if (phone.value === '' || phone.value == null) {
        errorPhone.innerHTML = 'N° de téléphone requis';
        phone.style.borderColor = "red";
        phone.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (phoneValid.test(phone.value) == false){
        errorPhone.innerHTML = 'Format incorrect';
        phone.style.borderColor = "red";
        phone.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorPhone.innerHTML = "";
        phone.style.borderColor = "green";
        phone.style.boxShadow = "";
    }

    if (address.value === '' || address.value == null) {
        errorAddress.innerHTML = 'Adresse requise';
        address.style.borderColor = "red";
        address.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorAddress.innerHTML = "";
        address.style.borderColor = "green";
        address.style.boxShadow = "";
    }

    if (city.value === '' || city.value == null) {
        errorCity.innerHTML = 'Ville requise';
        city.style.borderColor = "red";
        city.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (cityValid.test(city.value) == false){
        errorCity.innerHTML = 'Format incorrect';
        city.style.borderColor = "red";
        city.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorCity.innerHTML = "";
        city.style.borderColor = "green";
        city.style.boxShadow = "";
    }

    if (zip.value === '' || zip.value == null) {
        errorZip.innerHTML = 'Code postal requis';
        zip.style.borderColor = "red";
        zip.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (zipValid.test(zip.value) == false){
        event.preventDefault();
        errorZip.innerHTML = 'Format incorrect';
        zip.style.borderColor = "red";
        zip.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorZip.innerHTML = "";
        zip.style.borderColor = "green";
        zip.style.boxShadow = "";
    }

    if (state.value === '' || state.value == null) {
        errorState.innerHTML = 'Pays requis';
        state.style.borderColor = "red";
        state.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else if (stateValid.test(state.value) == false){
        errorState.innerHTML = 'Format incorrect';
        state.style.borderColor = "red";
        state.style.boxShadow = "0px 0px 8px red";
        event.preventDefault();
    } else {
        errorState.innerHTML = "";
        state.style.borderColor = "green";
        state.style.boxShadow = "";
    }

    if (checkBox.checked == false && lastName.value === '' || lastName.value == null || lastNameValid.test(lastName.value) == false && firstName.value === '' || firstName.value == null || firstNameValid.test(firstName.value) == false && email.value === '' || email.value == null || emailValid.test(email.value) == false && phone.value === '' || phone.value == null || phoneValid.test(phone.value) == false && address.value === '' || address.value == null && city.value === '' || city.value == null || cityValid.test(city.value) == false && zip.value === '' || zip.value == null || zipValid.test(zip.value) == false && state.value === '' || state.value == null || stateValid.test(state.value) == false) {
        event.preventDefault();
    } else if (checkBox.checked == false && lastName.value != '' && lastName.value != null && lastNameValid.test(lastName.value) == true && firstName.value != '' && firstName.value != null && firstNameValid.test(firstName.value) == true && email.value != '' && email.value != null && emailValid.test(email.value) == true && phone.value != '' && phone.value != null && phoneValid.test(phone.value) == true && address.value != '' && address.value != null && city.value != '' && city.value != null && cityValid.test(city.value) == true && zip.value != '' && zip.value != null && zipValid.test(zip.value) == true && state.value != '' && state.value != null && stateValid.test(state.value) == true) {
        alert("Merci de lire et d'accepter les conditions générales de vente pour pouvoir continuer.");
        event.preventDefault();
    }
}
