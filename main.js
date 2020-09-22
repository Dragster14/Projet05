// TABLEAU DES LENTILLES
let lentilleType = [
    "Objectif à focale Fixe",
    "Objectif à focale Standard",
    "Objectif à focale Zoom"
]

// TABLEAU DES CAMERAS
let cameraType = [
    {
        nom: "Caméra Expert XX",
        prix: 700,
        quantite: 1
    },
    {
        nom: "Caméra Puissante",
        prix: 599.99
    },
    {
        nom: "Caméra Créative",
        prix: 499.99
    },
    {
        nom: "Caméra Performante",
        prix: 399.99
    },
    {
        nom: "Caméra Ultra Rapide",
        prix: 299.99
    }
]

// VARIABLES VALIDATION AJOUT CAMERA PANIER
let validationAjout = document.getElementById('validationAjout');

//LIEN PANIER OFF
document.querySelector('#lienPanier').style.pointerEvents = "none";

// AJOUT CAMERA UNE
function ajoutCameraUne () {
    let lentille = parseInt(document.querySelector('#lentille').selectedOptions[0].value, 4);
    
    if (lentille > 0) {
        localStorage.setItem('cameraUne', JSON.stringify(cameraType[0]));
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        validationAjout.innerHTML = "Produit ajouté avec succès.";
        quantiteCameraUne()
        prixCameraUne()
        produitsPanier()

        if (lentille === 1) {
            localStorage.setItem('lentilleCameraUne', lentilleType[0]);
        } else if (lentille === 2) {
            localStorage.setItem('lentilleCameraUne', lentilleType[1]);
        } else if (lentille === 3) {
            localStorage.setItem('lentilleCameraUne', lentilleType[2]);
        }
    } else {
        alert("Merci de sélectionner une lentille.")
    }
}

function quantiteCameraUne() {
    let storageQuantiteCameraUne = localStorage.getItem('quantiteCameraUne');
    storageQuantiteCameraUne = parseInt(storageQuantiteCameraUne);

    if (storageQuantiteCameraUne >= 1) {
        localStorage.setItem('quantiteCameraUne', storageQuantiteCameraUne + 1);
    } else {
        localStorage.setItem('quantiteCameraUne', 1);
    }
}

function prixCameraUne() {
    let storagePrixCameraUne = localStorage.getItem('prixCameraUne');
    storagePrixCameraUne = parseInt(storagePrixCameraUne);

    if (storagePrixCameraUne >= 1) {
        localStorage.setItem('prixCameraUne', storagePrixCameraUne + 700);
    } else {
        localStorage.setItem('prixCameraUne', 700);
    }
}

// AJOUT CAMERA DEUX
function ajoutCameraDeux () {
    let lentille = parseInt(document.querySelector('#lentille').selectedOptions[0].value, 4);

    if (lentille > 0) {
        localStorage.setItem('cameraDeux', JSON.stringify(cameraType[1]));
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        validationAjout.innerHTML = "Produit ajouté avec succès.";
        quantiteCameraDeux()
        prixCameraDeux()
        produitsPanier()

        if (lentille === 1) {
            localStorage.setItem('lentilleCameraDeux', lentilleType[0]);
        } else if (lentille === 2) {
            localStorage.setItem('lentilleCameraDeux', lentilleType[1]);
        } else if (lentille === 3) {
            localStorage.setItem('lentilleCameraDeux', lentilleType[2]);
        }
    } else {
        alert("Merci de sélectionner une lentille.")
    }
}

function quantiteCameraDeux() {
    let storageQuantiteCameraDeux = localStorage.getItem('quantiteCameraDeux');
    storageQuantiteCameraDeux = parseInt(storageQuantiteCameraDeux);

    if (storageQuantiteCameraDeux >= 1) {
        localStorage.setItem('quantiteCameraDeux', storageQuantiteCameraDeux + 1);
    } else {
        localStorage.setItem('quantiteCameraDeux', 1);
    }
}

function prixCameraDeux() {
    let storagePrixCameraDeux = localStorage.getItem('prixCameraDeux');
    storagePrixCameraDeux = parseInt(storagePrixCameraDeux);

    if (storagePrixCameraDeux >= 1) {
        localStorage.setItem('prixCameraDeux', storagePrixCameraDeux + 599.99);
    } else {
        localStorage.setItem('prixCameraDeux', 599.99);
    }
}

// AJOUT CAMERA TROIS
function ajoutCameraTrois () {
    let lentille = parseInt(document.querySelector('#lentille').selectedOptions[0].value, 4);

    if (lentille > 0) {
        localStorage.setItem('cameraTrois', JSON.stringify(cameraType[2]));
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        validationAjout.innerHTML = "Produit ajouté avec succès.";
        quantiteCameraTrois()
        prixCameraTrois()
        produitsPanier()

        if (lentille === 1) {
            localStorage.setItem('lentilleCameraTrois', lentilleType[0]);
        } else if (lentille === 2) {
            localStorage.setItem('lentilleCameraTrois', lentilleType[1]);
        } else if (lentille === 3) {
            localStorage.setItem('lentilleCameraTrois', lentilleType[2]);
        }
    } else {
        alert("Merci de sélectionner une lentille.")
    }
}

function quantiteCameraTrois() {
    let storageQuantiteCameraTrois = localStorage.getItem('quantiteCameraTrois');
    storageQuantiteCameraTrois = parseInt(storageQuantiteCameraTrois);

    if (storageQuantiteCameraTrois >= 1) {
        localStorage.setItem('quantiteCameraTrois', storageQuantiteCameraTrois + 1);
    } else {
        localStorage.setItem('quantiteCameraTrois', 1);
    }
}

function prixCameraTrois() {
    let storagePrixCameraTrois = localStorage.getItem('prixCameraTrois');
    storagePrixCameraTrois = parseInt(storagePrixCameraTrois);

    if (storagePrixCameraTrois >= 1) {
        localStorage.setItem('prixCameraTrois', storagePrixCameraTrois + 499.99);
    } else {
        localStorage.setItem('prixCameraTrois', 499.99);
    }
}

// AJOUT CAMERA QUATRE
function ajoutCameraQuatre () {
    let lentille = parseInt(document.querySelector('#lentille').selectedOptions[0].value, 4);

    if (lentille > 0) {
        localStorage.setItem('cameraQuatre', JSON.stringify(cameraType[3]));
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        validationAjout.innerHTML = "Produit ajouté avec succès.";
        quantiteCameraQuatre()
        prixCameraQuatre()
        produitsPanier()

        if (lentille === 1) {
            localStorage.setItem('lentilleCameraQuatre', lentilleType[0]);
        } else if (lentille === 2) {
            localStorage.setItem('lentilleCameraQuatre', lentilleType[1]);
        } else if (lentille === 3) {
            localStorage.setItem('lentilleCameraQuatre', lentilleType[2]);
        }
    } else {
        alert("Merci de sélectionner une lentille.")
    }
}

function quantiteCameraQuatre() {
    let storageQuantiteCameraQuatre = localStorage.getItem('quantiteCameraQuatre');
    storageQuantiteCameraQuatre = parseInt(storageQuantiteCameraQuatre);

    if (storageQuantiteCameraQuatre >= 1) {
        localStorage.setItem('quantiteCameraQuatre', storageQuantiteCameraQuatre + 1);
    } else {
        localStorage.setItem('quantiteCameraQuatre', 1);
    }
}

function prixCameraQuatre() {
    let storagePrixCameraQuatre = localStorage.getItem('prixCameraQuatre');
    storagePrixCameraQuatre = parseInt(storagePrixCameraQuatre);

    if (storagePrixCameraQuatre >= 1) {
        localStorage.setItem('prixCameraQuatre', storagePrixCameraQuatre + 399.99);
    } else {
        localStorage.setItem('prixCameraQuatre', 399.99);
    }
}

// AJOUT CAMERA CINQ
function ajoutCameraCinq () {
    let lentille = parseInt(document.querySelector('#lentille').selectedOptions[0].value, 4);

    if (lentille > 0) {
        localStorage.setItem('cameraCinq', JSON.stringify(cameraType[4]));
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        validationAjout.innerHTML = "Produit ajouté avec succès.";
        quantiteCameraCinq()
        prixCameraCinq()
        produitsPanier()

        if (lentille === 1) {
            localStorage.setItem('lentilleCameraCinq', lentilleType[0]);
        } else if (lentille === 2) {
            localStorage.setItem('lentilleCameraCinq', lentilleType[1]);
        } else if (lentille === 3) {
            localStorage.setItem('lentilleCameraCinq', lentilleType[2]);
        }
    } else {
        alert("Merci de sélectionner une lentille.")
    }
}

function quantiteCameraCinq() {
    let storageQuantiteCameraCinq = localStorage.getItem('quantiteCameraCinq');
    storageQuantiteCameraCinq = parseInt(storageQuantiteCameraCinq);

    if (storageQuantiteCameraCinq >= 1) {
        localStorage.setItem('quantiteCameraCinq', storageQuantiteCameraCinq + 1);
    } else {
        localStorage.setItem('quantiteCameraCinq', 1);
    }
}

function prixCameraCinq() {
    let storagePrixCameraCinq = localStorage.getItem('prixCameraCinq');
    storagePrixCameraCinq = parseInt(storagePrixCameraCinq);

    if (storagePrixCameraCinq >= 1) {
        localStorage.setItem('prixCameraCinq', storagePrixCameraCinq + 299.99);
    } else {
        localStorage.setItem('prixCameraCinq', 299.99);
    }
}

// VERIFICATION NOMBRE DE PRODUITS DANS LE PANIER
function produitsPanierChargementPage() {
    let nombreProduits = localStorage.getItem('produitsPanier');

    if (nombreProduits >= 1) {
        document.querySelector('#compteurPanier').innerHTML = nombreProduits;
        document.querySelector('#lienPanier').style.pointerEvents = "auto";
        document.querySelector('#panier-vide').style.display = "none";
        document.querySelector('#btn-commander').removeAttribute("disabled");
    }
}

function produitsPanier() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    nombreProduits = parseInt(nombreProduits);
    
    if (nombreProduits) {
        localStorage.setItem('produitsPanier', nombreProduits + 1);
        document.querySelector('#compteurPanier').innerHTML = nombreProduits + 1;
    } else {
        localStorage.setItem('produitsPanier', 1);
        document.querySelector('#compteurPanier').innerHTML = 1;
    }
}

// AFFICHAGE PANIER DES PRODUITS
function affichagePanier() {
    let panierCameraUne = JSON.parse(localStorage.getItem('cameraUne'));
    let panierCameraDeux = JSON.parse(localStorage.getItem('cameraDeux'));
    let panierCameraTrois = JSON.parse(localStorage.getItem('cameraTrois'));
    let panierCameraQuatre = JSON.parse(localStorage.getItem('cameraQuatre'));
    let panierCameraCinq = JSON.parse(localStorage.getItem('cameraCinq'));

    let prixCameraUne = parseInt(localStorage.getItem('prixCameraUne'));
    let prixCameraDeux = parseInt(localStorage.getItem('prixCameraDeux'));
    let prixCameraTrois = parseInt(localStorage.getItem('prixCameraTrois'));
    let prixCameraQuatre = parseInt(localStorage.getItem('prixCameraQuatre'));
    let prixCameraCinq = parseInt(localStorage.getItem('prixCameraCinq'));

    let panierProduits = document.getElementById('produits');
    let coutTotal = document.getElementById('total-produits');

    let panierTableauZero = `
        <thead class="thead-dark">
            <tr>
                <th scope="col">Articles</th>
                <th scope="col" class="text-center">Quantité</th>
                <th scope="col" class="text-center">Lentille</th>
                <th scope="col" class="text-center">Prix</th>
            </tr>
        </thead>
    `;

    let panierTableauUn = `
        <tbody>
            <tr>
                <th scope="row" id="nomTableauUn"></th>
                <td id="quantiteTableauUn" class="text-center"></td>
                <td id="lentilleTableauUn" class="text-center"></td>
                <td id="prixTableauUn" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let panierTableauDeux = `
        <tbody>
            <tr>
                <th scope="row" id="nomTableauDeux"></th>
                <td id="quantiteTableauDeux" class="text-center"></td>
                <td id="lentilleTableauDeux" class="text-center"></td>
                <td id="prixTableauDeux" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let panierTableauTrois = `
        <tbody>
            <tr>
                <th scope="row" id="nomTableauTrois"></th>
                <td id="quantiteTableauTrois" class="text-center"></td>
                <td id="lentilleTableauTrois" class="text-center"></td>
                <td id="prixTableauTrois" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let panierTableauQuatre = `
        <tbody>
            <tr>
                <th scope="row" id="nomTableauQuatre"></th>
                <td id="quantiteTableauQuatre" class="text-center"></td>
                <td id="lentilleTableauQuatre" class="text-center"></td>
                <td id="prixTableauQuatre" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let panierTableauCinq = `
        <tbody>
            <tr>
                <th scope="row" id="nomTableauCinq"></th>
                <td id="quantiteTableauCinq" class="text-center"></td>
                <td id="lentilleTableauCinq" class="text-center"></td>
                <td id="prixTableauCinq" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let boutonSuppressionProduitUn = `
        <a href="#" onclick="supprimerProduitUn()" class="mr-3 text-dark" style="text-decoration: none;">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
    `;

    let boutonSuppressionProduitDeux = `
        <a href="#" onclick="supprimerProduitDeux()" class="mr-3 text-dark" style="text-decoration: none;>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
    `;

    let boutonSuppressionProduitTrois = `
        <a href="#" onclick="supprimerProduitTrois()" class="mr-3 text-dark" style="text-decoration: none;>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
    `;

    let boutonSuppressionProduitQuatre = `
        <a href="#" onclick="supprimerProduitQuatre()" class="mr-3 text-dark" style="text-decoration: none;>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
    `;

    let boutonSuppressionProduitCinq = `
        <a href="#" onclick="supprimerProduitCinq()" class="mr-3 text-dark" style="text-decoration: none;>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
    `;

    let totalPanier = `
        <thead class="thead-dark">
            <tr>
                <th scope="col" class="text-center">Total Panier</th>
            </tr>
        </thead>
        <tbody>
            <tr id="cout-total-produits" class="text-center font-weight-bold"></tr>
        </tbody>
    `;

    if (panierCameraUne != null && panierCameraDeux == null && panierCameraTrois == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + " €";
    } else if (panierCameraDeux != null && panierCameraUne == null && panierCameraTrois == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + " €";
    } else if (panierCameraTrois != null && panierCameraUne == null && panierCameraDeux == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauTrois;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraTrois + " €";
    } else if (panierCameraQuatre != null && panierCameraUne == null && panierCameraDeux == null && panierCameraTrois == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraQuatre + " €";
    } else if (panierCameraCinq != null && panierCameraUne == null && panierCameraDeux == null && panierCameraTrois == null && panierCameraQuatre == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraCinq + " €";
    } else if (panierCameraUne != null && panierCameraDeux != null && panierCameraTrois == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauDeux;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraDeux + " €";
    } else if (panierCameraUne != null && panierCameraTrois != null && panierCameraDeux == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauTrois;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraTrois + " €";
    } else if (panierCameraUne != null && panierCameraQuatre != null && panierCameraDeux == null && panierCameraTrois == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraQuatre + " €";
    } else if (panierCameraUne != null && panierCameraCinq != null && panierCameraDeux == null && panierCameraTrois == null && panierCameraQuatre == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraCinq + " €";
    } else if (panierCameraUne != null && panierCameraDeux != null && panierCameraTrois != null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauDeux + panierTableauTrois;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraDeux + prixCameraTrois + " €";
    } else if (panierCameraUne != null && panierCameraDeux != null && panierCameraTrois != null && panierCameraQuatre != null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauDeux + panierTableauTrois + panierTableauQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraDeux + prixCameraTrois + prixCameraQuatre + " €";
    } else if (panierCameraUne != null && panierCameraDeux != null && panierCameraTrois != null && panierCameraQuatre != null && panierCameraCinq != null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauUn + panierTableauDeux + panierTableauTrois + panierTableauQuatre + panierTableauCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauUn').innerHTML = boutonSuppressionProduitUn + cameraType[0].nom;
        document.getElementById('quantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('lentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('prixTableauUn').innerHTML = prixCameraUne + " €";
        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraUne + prixCameraDeux + prixCameraTrois + prixCameraQuatre + prixCameraCinq + " €";
    } else if (panierCameraDeux != null && panierCameraTrois != null && panierCameraUne == null && panierCameraQuatre == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux + panierCameraTrois;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + prixCameraTrois + " €";
    } else if (panierCameraDeux != null && panierCameraQuatre != null && panierCameraUne == null && panierCameraTrois == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux + panierCameraQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + prixCameraQuatre + " €";
    } else if (panierCameraDeux != null && panierCameraCinq != null && panierCameraUne == null && panierCameraTrois == null && panierCameraQuatre == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux + panierCameraCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + prixCameraCinq + " €";
    } else if (panierCameraDeux != null && panierCameraTrois != null && panierCameraQuatre != null && panierCameraUne == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux + panierCameraTrois + panierCameraQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + prixCameraTrois + prixCameraQuatre + " €";
    } else if (panierCameraDeux != null && panierCameraTrois != null && panierCameraQuatre != null && panierCameraCinq != null && panierCameraUne == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauDeux + panierCameraTrois + panierCameraQuatre + panierCameraCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauDeux').innerHTML = boutonSuppressionProduitDeux + cameraType[1].nom;
        document.getElementById('quantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('lentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('prixTableauDeux').innerHTML = localStorage.getItem('prixCameraDeux') + " €";
        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraDeux + prixCameraTrois + prixCameraQuatre + prixCameraCinq + " €";
    } else if (panierCameraTrois != null && panierCameraQuatre != null && panierCameraUne == null && panierCameraDeux == null && panierCameraCinq == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauTrois + panierTableauQuatre;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraTrois + prixCameraQuatre + " €";
    } else if (panierCameraTrois != null && panierCameraQuatre != null && panierCameraCinq != null && panierCameraUne == null && panierCameraDeux == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauTrois + panierTableauQuatre + panierTableauCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauTrois').innerHTML = boutonSuppressionProduitTrois + cameraType[2].nom;
        document.getElementById('quantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('lentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('prixTableauTrois').innerHTML = localStorage.getItem('prixCameraTrois') + " €";
        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraTrois + prixCameraQuatre + prixCameraCinq + " €";
    } else if (panierCameraQuatre != null && panierCameraCinq != null && panierCameraUne == null && panierCameraDeux == null && panierCameraTrois == null) {
        panierProduits.innerHTML = panierTableauZero + panierTableauQuatre + panierTableauCinq;
        coutTotal.innerHTML = totalPanier;

        document.getElementById('nomTableauQuatre').innerHTML = boutonSuppressionProduitQuatre + cameraType[3].nom;
        document.getElementById('quantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('lentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('prixTableauQuatre').innerHTML = localStorage.getItem('prixCameraQuatre') + " €";
        document.getElementById('nomTableauCinq').innerHTML = boutonSuppressionProduitCinq + cameraType[4].nom;
        document.getElementById('quantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('lentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('prixTableauCinq').innerHTML = localStorage.getItem('prixCameraCinq') + " €";
        document.getElementById('cout-total-produits').innerHTML = prixCameraQuatre + prixCameraCinq + " €";
    }
}

// SUPPRIMER UN PRODUIT
function supprimerProduitUn() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    let storageQuantiteCameraUne = localStorage.getItem('quantiteCameraUne');
    storageQuantiteCameraUne = parseInt(storageQuantiteCameraUne);

    localStorage.setItem('produitsPanier', nombreProduits - storageQuantiteCameraUne);
    localStorage.removeItem('cameraUne');
    localStorage.removeItem('quantiteCameraUne');
    localStorage.removeItem('lentilleCameraUne');
    localStorage.removeItem('prixCameraUne');
    location.reload();
}

function supprimerProduitDeux() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    let storageQuantiteCameraDeux = localStorage.getItem('quantiteCameraDeux');
    storageQuantiteCameraDeux = parseInt(storageQuantiteCameraDeux);

    localStorage.setItem('produitsPanier', nombreProduits - storageQuantiteCameraDeux);
    localStorage.removeItem('cameraDeux');
    localStorage.removeItem('quantiteCameraDeux');
    localStorage.removeItem('lentilleCameraDeux');
    localStorage.removeItem('prixCameraDeux');
    location.reload();
}

function supprimerProduitTrois() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    let storageQuantiteCameraTrois = localStorage.getItem('quantiteCameraTrois');
    storageQuantiteCameraTrois = parseInt(storageQuantiteCameraTrois);

    localStorage.setItem('produitsPanier', nombreProduits - storageQuantiteCameraTrois);
    localStorage.removeItem('cameraTrois');
    localStorage.removeItem('quantiteCameraTrois');
    localStorage.removeItem('lentilleCameraTrois');
    localStorage.removeItem('prixCameraTrois');
    location.reload();
}

function supprimerProduitQuatre() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    let storageQuantiteCameraQuatre = localStorage.getItem('quantiteCameraQuatre');
    storageQuantiteCameraQuatre = parseInt(storageQuantiteCameraQuatre);

    localStorage.setItem('produitsPanier', nombreProduits - storageQuantiteCameraQuatre);
    localStorage.removeItem('cameraQuatre');
    localStorage.removeItem('quantiteCameraQuatre');
    localStorage.removeItem('lentilleCameraQuatre');
    localStorage.removeItem('prixCameraQuatre');
    location.reload();
}

function supprimerProduitCCinq() {
    let nombreProduits = localStorage.getItem('produitsPanier');
    let storageQuantiteCameraCinq = localStorage.getItem('quantiteCameraCinq');
    storageQuantiteCameraCinq = parseInt(storageQuantiteCameraCinq);

    localStorage.setItem('produitsPanier', nombreProduits - storageQuantiteCameraCinq);
    localStorage.removeItem('cameraCinq');
    localStorage.removeItem('quantiteCameraCinq');
    localStorage.removeItem('lentilleCameraCinq');
    localStorage.removeItem('prixCameraCinq');
    location.reload();
}

// VALIDATION FORMULAIRE
function validationFormulaire() {
    let nom = document.querySelector('#nom');
    let erreurNom = document.querySelector('#erreur-nom');
    let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    let prenom = document.querySelector('#prenom');
    let erreurPrenom = document.querySelector('#erreur-prenom');
    let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    let email = document.querySelector('#email');
    let erreurEmail = document.querySelector('#erreur-email');
    let emailValid = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    let telephone = document.querySelector('#telephone');
    let erreurTelephone = document.querySelector('#erreur-telephone');
    let telephoneValid = /^0\d{9}$/;

    let adresse = document.querySelector('#adresse');
    let erreurAdresse = document.querySelector('#erreur-adresse');

    let ville = document.querySelector('#ville');
    let erreurVille = document.querySelector('#erreur-ville');
    let villeValid = /^[a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    let codePostal = document.querySelector('#codepostal');
    let erreurCodePostal = document.querySelector('#erreur-codepostal');
    let codePostalValid = /^\d{5}$/;

    let pays = document.querySelector('#pays');
    let erreurPays = document.querySelector('#erreur-pays');
    let paysValid = /^[a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    let checkBox = document.querySelector('#checkbox');

    let erreurFormulaire;
    
    if (nom.value === '' || nom.value == null) {
        erreurNom.innerHTML = 'Nom requis';
        nom.style.borderColor = "red";
        nom.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (nomValid.test(nom.value) == false){
        erreurNom.innerHTML = 'Format incorrect';
        nom.style.borderColor = "red";
        nom.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurNom.innerHTML = "";
        nom.style.borderColor = "green";
        nom.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (prenom.value === '' || prenom.value == null) {
        erreurPrenom.innerHTML = 'Prénom requis';
        prenom.style.borderColor = "red";
        prenom.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (prenomValid.test(prenom.value) == false){
        erreurPrenom.innerHTML = 'Format incorrect';
        prenom.style.borderColor = "red";
        prenom.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurPrenom.innerHTML = "";
        prenom.style.borderColor = "green";
        prenom.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (email.value === '' || email.value == null) {
        erreurEmail.innerHTML = 'Email requis';
        email.style.borderColor = "red";
        email.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (emailValid.test(email.value) == false){
        erreurEmail.innerHTML = 'Format incorrect';
        email.style.borderColor = "red";
        email.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurEmail.innerHTML = "";
        email.style.borderColor = "green";
        email.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (telephone.value === '' || telephone.value == null) {
        erreurTelephone.innerHTML = 'N° de téléphone requis';
        telephone.style.borderColor = "red";
        telephone.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (telephoneValid.test(telephone.value) == false){
        erreurTelephone.innerHTML = 'Format incorrect';
        telephone.style.borderColor = "red";
        telephone.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurTelephone.innerHTML = "";
        telephone.style.borderColor = "green";
        telephone.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (adresse.value === '' || adresse.value == null) {
        erreurAdresse.innerHTML = 'Adresse requise';
        adresse.style.borderColor = "red";
        adresse.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurAdresse.innerHTML = "";
        adresse.style.borderColor = "green";
        adresse.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (ville.value === '' || ville.value == null) {
        erreurVille.innerHTML = 'Ville requise';
        ville.style.borderColor = "red";
        ville.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (villeValid.test(ville.value) == false){
        erreurVille.innerHTML = 'Format incorrect';
        ville.style.borderColor = "red";
        ville.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurVille.innerHTML = "";
        ville.style.borderColor = "green";
        ville.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (codePostal.value === '' || codePostal.value == null) {
        erreurCodePostal.innerHTML = 'Code postal requis';
        codePostal.style.borderColor = "red";
        codePostal.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (codePostalValid.test(codePostal.value) == false){
        erreurCodePostal.innerHTML = 'Format incorrect';
        codePostal.style.borderColor = "red";
        codePostal.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurCodePostal.innerHTML = "";
        codePostal.style.borderColor = "green";
        codePostal.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (pays.value === '' || pays.value == null) {
        erreurPays.innerHTML = 'Pays requis';
        pays.style.borderColor = "red";
        pays.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else if (paysValid.test(pays.value) == false){
        erreurPays.innerHTML = 'Format incorrect';
        pays.style.borderColor = "red";
        pays.style.boxShadow = "0px 0px 8px red";
        erreurFormulaire = 1;
    } else {
        erreurPays.innerHTML = "";
        pays.style.borderColor = "green";
        pays.style.boxShadow = "";
        erreurFormulaire = 0;
    }

    if (checkBox.checked == true && erreurFormulaire == 1) {
        return false
    } else if (checkBox.checked == false && erreurFormulaire == 0) {
        alert("Merci de lire et d'accepter les conditions générales de vente pour pouvoir continuer.");
        return false
    } else {
        return true
    }
}

// APPEL DES FONCTIONS
produitsPanierChargementPage()
affichagePanier()