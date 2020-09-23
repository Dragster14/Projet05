// NETTOYAGE LOCALSTORAGE FERMETURE PAGE
window.onbeforeunload = nettoyageStorage;

function nettoyageStorage() {
    localStorage.clear();
}

// AFFICHAGE PRODUITS CONFIRMATION
function affichageConfirmation() {
    let confirmationPanierCameraUne = JSON.parse(localStorage.getItem('cameraUne'));
    let confirmationPanierCameraDeux = JSON.parse(localStorage.getItem('cameraDeux'));
    let confirmationPanierCameraTrois = JSON.parse(localStorage.getItem('cameraTrois'));
    let confirmationPanierCameraQuatre = JSON.parse(localStorage.getItem('cameraQuatre'));
    let confirmationPanierCameraCinq = JSON.parse(localStorage.getItem('cameraCinq'));

    let confirmationPrixCameraUne = parseFloat(localStorage.getItem('prixCameraUne'));
    let confirmationPrixCameraDeux = parseFloat(localStorage.getItem('prixCameraDeux'));
    let confirmationPrixCameraTrois = parseFloat(localStorage.getItem('prixCameraTrois'));
    let confirmationPrixCameraQuatre = parseFloat(localStorage.getItem('prixCameraQuatre'));
    let confirmationPrixCameraCinq = parseFloat(localStorage.getItem('prixCameraCinq'));

    let confirmationPanierProduits = document.getElementById('confirmation-produits');
    let confirmationCoutTotal = document.getElementById('confirmation-total-produits');

    let confirmationPanierTableauZero = `
        <thead class="thead-dark">
            <tr>
                <th scope="col">Articles</th>
                <th scope="col" class="text-center">Quantité</th>
                <th scope="col" class="text-center">Lentille</th>
                <th scope="col" class="text-center">Prix</th>
            </tr>
        </thead>
    `;

    let confirmationPanierTableauUn = `
        <tbody>
            <tr>
                <th scope="row" id="confirmationNomTableauUn"></th>
                <td id="confirmationQuantiteTableauUn" class="text-center"></td>
                <td id="confirmationLentilleTableauUn" class="text-center"></td>
                <td id="confirmationPrixTableauUn" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let confirmationPanierTableauDeux = `
        <tbody>
            <tr>
                <th scope="row" id="confirmationNomTableauDeux"></th>
                <td id="confirmationQuantiteTableauDeux" class="text-center"></td>
                <td id="confirmationLentilleTableauDeux" class="text-center"></td>
                <td id="confirmationPrixTableauDeux" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let confirmationPanierTableauTrois = `
        <tbody>
            <tr>
                <th scope="row" id="confirmationNomTableauTrois"></th>
                <td id="confirmationQuantiteTableauTrois" class="text-center"></td>
                <td id="confirmationLentilleTableauTrois" class="text-center"></td>
                <td id="confirmationPrixTableauTrois" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let confirmationPanierTableauQuatre = `
        <tbody>
            <tr>
                <th scope="row" id="confirmationNomTableauQuatre"></th>
                <td id="confirmationQuantiteTableauQuatre" class="text-center"></td>
                <td id="confirmationLentilleTableauQuatre" class="text-center"></td>
                <td id="confirmationPrixTableauQuatre" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let confirmationPanierTableauCinq = `
        <tbody>
            <tr>
                <th scope="row" id="confirmationNomTableauCinq"></th>
                <td id="confirmationQuantiteTableauCinq" class="text-center"></td>
                <td id="confirmationLentilleTableauCinq" class="text-center"></td>
                <td id="confirmationPrixTableauCinq" class="text-center"></td>
            </tr>
        </tbody>
    `;

    let confirmationTotalPanier = `
        <thead class="thead-dark">
            <tr>
                <th scope="col" class="text-center">Total Panier</th>
            </tr>
        </thead>
        <tbody>
            <tr id="confirmation-cout-total-produits" class="text-center font-weight-bold"></tr>
        </tbody>
    `;

    if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraUne == null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + " €";
    } else if (confirmationPanierCameraTrois != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauTrois;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraTrois + " €";
    } else if (confirmationPanierCameraQuatre != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraTrois != null && confirmationPanierCameraDeux == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauTrois;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraTrois + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraCinq != null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauTrois;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraTrois + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraTrois == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraCinq != null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraCinq != null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraTrois == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraDeux == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauTrois + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraTrois != null && confirmationPanierCameraCinq != null && confirmationPanierCameraDeux == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauTrois + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraTrois + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraDeux == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauTrois + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraUne != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauUn + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauUn').innerHTML = cameraType[0].nom;
        document.getElementById('confirmationQuantiteTableauUn').innerHTML = localStorage.getItem('quantiteCameraUne');
        document.getElementById('confirmationLentilleTableauUn').innerHTML = localStorage.getItem('lentilleCameraUne');
        document.getElementById('confirmationPrixTableauUn').innerHTML = confirmationPrixCameraUne + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraUne + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraUne == null && confirmationPanierCameraQuatre == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauTrois;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraTrois + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraUne == null && confirmationPanierCameraTrois == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraTrois == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraUne == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraTrois == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraDeux != null && confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauDeux + confirmationPanierTableauTrois + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauDeux').innerHTML = cameraType[1].nom;
        document.getElementById('confirmationQuantiteTableauDeux').innerHTML = localStorage.getItem('quantiteCameraDeux');
        document.getElementById('confirmationLentilleTableauDeux').innerHTML = localStorage.getItem('lentilleCameraDeux');
        document.getElementById('confirmationPrixTableauDeux').innerHTML = confirmationPrixCameraDeux + " €";
        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraDeux + confirmationPrixCameraTrois + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraCinq == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauTrois + confirmationPanierTableauQuatre;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraTrois + confirmationPrixCameraQuatre + " €";
    } else if (confirmationPanierCameraTrois != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraQuatre == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauTrois + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraTrois + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraTrois != null && confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauTrois + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauTrois').innerHTML = cameraType[2].nom;
        document.getElementById('confirmationQuantiteTableauTrois').innerHTML = localStorage.getItem('quantiteCameraTrois');
        document.getElementById('confirmationLentilleTableauTrois').innerHTML = localStorage.getItem('lentilleCameraTrois');
        document.getElementById('confirmationPrixTableauTrois').innerHTML = confirmationPrixCameraTrois + " €";
        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraTrois + confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    } else if (confirmationPanierCameraQuatre != null && confirmationPanierCameraCinq != null && confirmationPanierCameraUne == null && confirmationPanierCameraDeux == null && confirmationPanierCameraTrois == null) {
        confirmationPanierProduits.innerHTML = confirmationPanierTableauZero + confirmationPanierTableauQuatre + confirmationPanierTableauCinq;
        confirmationCoutTotal.innerHTML = confirmationTotalPanier;

        document.getElementById('confirmationNomTableauQuatre').innerHTML = cameraType[3].nom;
        document.getElementById('confirmationQuantiteTableauQuatre').innerHTML = localStorage.getItem('quantiteCameraQuatre');
        document.getElementById('confirmationLentilleTableauQuatre').innerHTML = localStorage.getItem('lentilleCameraQuatre');
        document.getElementById('confirmationPrixTableauQuatre').innerHTML = confirmationPrixCameraQuatre + " €";
        document.getElementById('confirmationNomTableauCinq').innerHTML = cameraType[4].nom;
        document.getElementById('confirmationQuantiteTableauCinq').innerHTML = localStorage.getItem('quantiteCameraCinq');
        document.getElementById('confirmationLentilleTableauCinq').innerHTML = localStorage.getItem('lentilleCameraCinq');
        document.getElementById('confirmationPrixTableauCinq').innerHTML = confirmationPrixCameraCinq + " €";
        document.getElementById('confirmation-cout-total-produits').innerHTML = confirmationPrixCameraQuatre + confirmationPrixCameraCinq + " €";
    }
}

// APPEL DES FONCTIONS
affichageConfirmation()