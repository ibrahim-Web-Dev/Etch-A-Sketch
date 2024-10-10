let container = document.querySelector(".container")
let bigContainer = document.querySelector(".bigContainer")
let boxCount = document.querySelector("button")
boxCount.addEventListener("click",prompter)
let boxNum=8
function prompter(){
    boxNum=prompt("how much box do you want per side")
    createGrid()
}

function createGrid(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    function getRandomRGB(){
        const r =randomBetween(0,255)
        const g =randomBetween(0,255)
        const b =randomBetween(0,255)
        return `rgb(${r},${g},${b})` 
    }
    bigContainer.removeChild(container)
    container = document.createElement("div")
    container.classList.add("container")
    bigContainer.appendChild(container)
    for (let i =0; i<boxNum**2;i++){
        let grid=document.createElement("div")
        grid.classList.add("grid")
        grid.style.width=720/boxNum+"px"
        grid.style.opacity=1;
        grid.style.height=720/boxNum+"px"
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor=getRandomRGB()
            grid.style.opacity-=0.1
        });
        container.appendChild(grid)
    }
}
createGrid()
