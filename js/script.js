import {projects} from "../js/projects.js"

function createProjectCard(proj) {
    const projCard = document.createElement("div");
    projCard.style.height = "400px";
    projCard.classList.add( "project-card" );

    const bgImage = document.createElement("div");
    bgImage.style.height = "400px";
    bgImage.style.display ="flex";
    bgImage.style.justifyContent = "end";
    bgImage.style.alignItems = "center";
    bgImage.style.backgroundImage = `url(../${proj.img})`;
    bgImage.classList.add( "project-card" );
    projCard.appendChild(bgImage);

    const carousel = document.createElement("div");
    carousel.style.zIndex = "2";
    carousel.style.marginRight = "30px";
    carousel.style.border = "solid";
    carousel.style.width = "150px";
    carousel.style.display ="flex";
    carousel.innerHTML=`
        <div id="carouselIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src= "${proj.cImg[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${proj.cImg[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${proj.cImg[2]}" class="d-block w-100" alt="...">
              </div>
              </div>
            </div>

            </button>
        </div>
    `;
    bgImage.appendChild(carousel);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay-text")
    overlay.innerHTML =`
        
        <h3>${proj.title} </h3>
        <p> ${proj.desc} </p>
    `;
    bgImage.appendChild(overlay);

    projCard.addEventListener("click", function (){
        navToProjPage(proj.id);
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

function navToProjPage(projID){
    if (projID == 1){
        window.location.href = `https://mharrim.github.io/good-game/`
    }else if(projID == 2){
        window.location.href = `https://mharrim.github.io/unity-scene/`
    }else if(projID == 3){
        window.location.href = `https://mharrim.github.io/flush-page/`
    }
    
}
