import {projects} from "../js/projects.js"

function createProjectCard(proj) {
    const projCard = document.createElement("div");
    projCard.style.height = "400px";
    
    projCard.innerHTML =`
        <h3>${proj.title} </h3>
        <p> ${proj.desc} </p>

    `;
    projCard.classList.add( "project-card" )
    return projCard;
}
document.addEventListener("DOMContentLoaded", function() {
    const projlist = document.getElementById("proj-list");

    projects.forEach(project =>{
        const proj = createProjectCard(project);
        projlist.appendChild(proj);
    });
    
});
