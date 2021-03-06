// Hide spinner + display page
window.onload = () => {
    setTimeout(() =>{
        document.querySelector("body").classList.add("display")
    },4000)
}

// Show hide sideMenu
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

// Scroll btn functionality
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    },1000);
})