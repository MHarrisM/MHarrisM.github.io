import {projects} from "../js/projects.js"

function createProjectCard(proj) {
    const projCard = document.createElement("div");
    
    projCard.innerHTML =`
        <h3>${proj.title} </h3>
        <p> ${proj.desc} </p>
        <p> Test </p>
        <img src="${proj.img}">
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
