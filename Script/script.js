// Al hacer clic en comprar
function comprarProducto() {
    alert("¡Gracias por tu interés! Será redirigido al proceso de compra.");
}

// Validar formulario de contacto
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    return true;
}

// Contador de visitas en la página del producto
if (window.location.pathname.includes("producto.html")) {
    let visitas = localStorage.getItem("visitas") || 0;
    visitas++;
    localStorage.setItem("visitas", visitas);
    console.log("Visitas al producto:", visitas);
}