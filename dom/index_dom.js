import hamburgerMenu from "./menu-ham.js";

const d = document;
/*Aquí se complicó la cosa, no entiendo, tiene que ver con SELECTORES*/
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
})