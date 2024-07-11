/*Este archivo es para crear la función que vamos a usar en el index-dom*/
export default function hamburgerMenu(panelBtn, panel) {
    const d = document; /*Esto es para simplificar todo el dominio del dom, que siempre inicia con document.*/

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn)){
            d.querySelector(panel).classList.toggle("is-active");
        }
    });
}

/*Si al hacer clic la*/