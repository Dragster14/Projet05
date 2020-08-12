// Message ajout au panier ou erreur
/*let addToCart = document.getElementById('add-to-cart');

addToCart.addEventListener('click', function(event) {
    let quantity = parseInt(document.getElementById('quantity').selectedOptions[0].value, 6)
    let lens = parseInt(document.getElementById('lens').selectedOptions[0].value, 4)
    if (quantity >= 1 && lens >= 1) {
        alert('Article correctement ajouté au panier !')
    } else {
        alert('Veuillez saisir une quantité et une lentille.')
    }
})*/

// Message achat effectué
/*document.querySelector('#commander').addEventListener('click', function (event) {
    alert('Achat effectué avec succès !')
})*/

// Bouton confirmation de commande
document.getElementById('button_confirm').style.display = "none";

document.querySelector('#commander').addEventListener('click', function(event) {
    document.querySelector('#button_confirm').style.display = "block"
})

// Redirection vers confirmation.html
document.querySelector('#button_confirm').addEventListener('click', function(event) {
    document.location.href="confirmation.html"
})

