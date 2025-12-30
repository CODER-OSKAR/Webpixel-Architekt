// TODO Imploment the Aria Hidden logic for the Hamburger menu

const openbtn = document.querySelector("#openbtn");
const closebtn = document.querySelector("#closebtn");
const toggle = document.querySelector(".nav-items");
const disclaimerbtn = document.querySelector("#close-disclaimer");
const disclaimerctn = document.querySelector(".disclaimer-container");

function enableVisabitiySidebar(element) {
    element.setAttribute("aria-hidden", "false");
}

function disableVisabitiySidebar(element) {
    element.setAttribute("aria-hidden", "true");
}

function destroyDisclaimer(element) {
    element.remove();
}

openbtn.addEventListener("click", (e) => {
    enableVisabitiySidebar(toggle);
});
closebtn.addEventListener("click", (e) => {
    disableVisabitiySidebar(toggle);
});

disclaimerbtn.addEventListener("click", (e) => {
    destroyDisclaimer(disclaimerctn);
});
