//Función para mostrar el menú
const mostrarMenu = (toogleID, navID) => {
    const toggle = document.getElementById(toogleID)
    const nav = document.getElementById(navID)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

mostrarMenu('menu-toggle', 'hidden-menu')

// Función para abrir el modal con la imagen seleccionada
function mostrarImagenEnModal(imagen) {
    const modal = document.getElementById("gallery-modal")
    const imagenModal = document.getElementById("gallery-modal-content")
    modal.classList.add("show")
    imagenModal.src = imagen.src
}

// Función para cerrar el modal
function cerrarImagenEnModal() {
    const modal = document.getElementById("gallery-modal")
    modal.classList.remove("show")
}