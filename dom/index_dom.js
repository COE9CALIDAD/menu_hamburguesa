import hamburgerMenu from "./menu-ham.js";

const d = document;
/*Aquí se complicó la cosa, no entiendo, tiene que ver con SELECTORES*/
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel_btn",".panel", ".menu a");
})

d.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });