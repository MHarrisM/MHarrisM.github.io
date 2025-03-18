import {projects} from "../js/projects.js"

function createProjectCard(proj) {
    const projCard = document.createElement("div");
    projCard.style.height = "400px";
    projCard.style.backgroundImage = `url(../${proj.img})`;
    projCard.classList.add( "project-card" )
    const overlay = document.createElement("div");
    overlay.classList.add("overlay-text")
    overlay.innerHTML =`
        <h3>${proj.title} </h3>
        <p> ${proj.desc} </p>
    `;
    projCard.appendChild(overlay);

    projCard.addEventListener("click", function (){
        navToPage(proj.id);
    })
    return projCard;
}
document.addEventListener("DOMContentLoaded", function() {
    const projlist = document.getElementById("proj-list");

    projects.forEach(project =>{
        const proj = createProjectCard(project);
        projlist.appendChild(proj);
    });
    
});

function navToPage(projID){
    if (projID == 1){
        window.location.href = `https://hurrysg.github.io/good-game/`
    }else if(projID == 2){
        window.location.href = `https://hurrysg.github.io/unity-scene/`
    }
    
}
