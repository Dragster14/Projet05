// Message ajout au panier ou erreur
let addToCart = document.querySelector('#add-to-cart');

addToCart.addEventListener('click', function(event) {
    let quantity = parseInt(document.querySelector('#quantity').selectedOptions[0].value, 6)
    let lens = parseInt(document.querySelector('#lens').selectedOptions[0].value, 4)
    if (quantity >= 1 && lens >= 1) {
        alert('Article correctement ajouté au panier !')
    } else {
        alert('Veuillez saisir une quantité et une lentille.')
    }
})