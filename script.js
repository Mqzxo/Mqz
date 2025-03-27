// Imposta l'URL della pagina. 
// Se ospiti su GitHub Pages, sostituisci questo URL con quello effettivo.
// Ad esempio: "https://tuo-username.github.io/replica-interface/"
const pageUrl = window.location.href; 

// Genera il QR Code nell'elemento con id "qr-code"
new QRCode(document.getElementById("qr-code"), {
  text: pageUrl,
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
