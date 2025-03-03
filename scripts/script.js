function createProjectCard() {
    const projCard = document.createElement("div");

    projCard.innerHTML =`
        <h3> Project Title </h3>
        <p> Description </p> 
    `;
    return projCard;
}
document.addEventListener("DOMContentLoaded", function() {
    const projlist = document.getElementById("proj-list");
    const proj = createProjectCard();
    projlist.appendChild(proj);
})