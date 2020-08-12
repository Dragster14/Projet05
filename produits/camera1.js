// Ajout au panier
const elt = document.getElementById('add-to-cart');

elt.addEventListener('click', function() {
    elt.innerHTML = "Article ajouté au panier !";
    elt.style.backgroundColor = 'green';
    elt.style.borderColor = 'green';
});
