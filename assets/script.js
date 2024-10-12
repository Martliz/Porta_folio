let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
//valida los campos del formulario
function validarFormulario() {
    const nombre = document.querySelector('input[placeholder="Tú Nombre"]').value;
    const telefono = document.querySelector('input[placeholder="Número telefónico"]').value;
    const correo = document.querySelector('input[placeholder="Dirección de correo"]').value;
    const tema = document.querySelector('input[placeholder="Tema"]').value;
    const mensaje = document.querySelector('textarea').value;

    if (!nombre || !telefono || !correo || !tema || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Por favor, ingresa un correo válido.');
        return false;
    }
    alert('Mensaje enviado correctamente.');
    // Aquí puedes añadir el envío del formulario
}


//scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 