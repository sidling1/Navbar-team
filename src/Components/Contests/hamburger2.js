const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".mlist");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("mlist").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))