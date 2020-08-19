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
        document.querySelector('#empty-cart').style.display = "none";
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
        document.querySelector('#cart').style.display = "none";
        document.querySelector('#total-cart').style.display = "none";
        document.querySelector('#submit-btn').style.display = "none";
    }
}

onLoadCartNumbers();
displayCart();


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