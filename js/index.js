// function colapsar() {
//     var documentos = this.document.getElementById("documentos")
//     documentos.classList.toggle('ocultar');
//     documentos.classList.toggle('mostrar');
// }

function verCertificado(id){

    // Get the modal
    var modal = document.getElementById("documento"+id);

    // When the user clicks on the button, open the modal
    modal.style.display = "block";


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            document.getElementById("documento" + id).style.display = "none";
        }
    }
}

function cerrarCertificado(id) {
//     var span = document.getElementById("documento" + id);
//     // When the user clicks on <span> (x), close the modal
//    span.style.display = "none";
    document.getElementById("documento" + id).style.display = "none"
}