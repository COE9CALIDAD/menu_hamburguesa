/*Este archivo es para crear la función que vamos a usar en el index-dom*/
export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document; /*Esto es para simplificar todo el dominio del dom, que siempre inicia con document.*/

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active"); /*Esto es para que también se "anime" la botón, al igual que para apareerlo solo se pone is-active*/
        }
        /*Esto es para que se retire el menú cuando hagamos clic en otro lado o en els vinculos*/
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active"); /*Esto es para que también se "anime" la botón, al igual que para apareerlo solo se pone is-active*/
        }
    });
}

/*Si se hace clic al botón de nuevo se restauran las clases? Que pasó ahí?*/