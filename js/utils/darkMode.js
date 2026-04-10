// Funcionalidad del modo oscuro
export const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    //Si estamos en modo oscuro debemos cambiar la imagen del logo a su versión para modo oscuro, y si estamos en modo claro, la cambiamos a su versión para modo claro
    const logo = document.querySelector('.logo');
    if(document.body.classList.contains('dark-mode')){
        logo.src = './img/common/logo_valdecantos_blanco_240x50.png';
    } else {
        logo.src = './img/common/logo_valdecantos_235x50.png';
    }
}