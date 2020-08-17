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
            cartNumbers();
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

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.span').textContent = 1;
    }
}

onLoadCartNumbers();