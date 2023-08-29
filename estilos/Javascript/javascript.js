const btnColapse = document.querySelector(".btn-colapse");
const links = document.querySelectorAll(".links");
const menu_lateral = document.querySelector("#menu-lateral");


btnColapse.addEventListener("click", ()=>{
    for(let link of links){
        link.classList.toggle("hidden");
    }
    menu_lateral.classList.toggle("hidden");
    menu_lateral.classList.toggle("side-menu");

})
