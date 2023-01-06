const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".sidebar11");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("pronites1").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
document.querySelectorAll("CreatorsCamp1").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
document.querySelectorAll("HumourFest1").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
document.querySelectorAll("PROSHOWS1").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))