const tema = document.getElementById("temas");
const dia_noite = document.getElementById("dia_noite");
const html = document.querySelector("html");

tema.addEventListener("click", () => {
    const src = dia_noite.src;
    dia_noite.src = src === "http://127.0.0.1:5500/img/sun-2-svgrepo-com.svg" ? "http://127.0.0.1:5500/img/moon-svgrepo-com.svg" : "http://127.0.0.1:5500/img/sun-2-svgrepo-com.svg";
    if(src === "http://127.0.0.1:5500/img/moon-svgrepo-com.svg"){
        html.style.setProperty("--cor-primaria", "#526D82");
        html.style.setProperty("--cor-secundaria", "black");
        html.style.setProperty("--cor-terciaria", "white");
    }
    if(src === "http://127.0.0.1:5500/img/sun-2-svgrepo-com.svg"){
        html.style.setProperty("--cor-primaria", "#84D1FA");
        html.style.setProperty("--cor-secundaria", "#fdfdfd");
        html.style.setProperty("--cor-terciaria", "black");
    }
});