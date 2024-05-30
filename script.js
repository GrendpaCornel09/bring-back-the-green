window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementsByClassName("header")[0];
    const mainNav = document.getElementById("main-nav");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("background-green");
        mainNav.classList.add("text-light");
    } else {
        header.classList.remove("background-green");
        mainNav.classList.remove("text-light");
    }
}