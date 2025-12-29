// TODO Imploment the Aria Hidden logic for the Hamburger menu

const openbtn = document.querySelector("#openbtn");
const closebtn = document.querySelector("#closebtn");
const toggle = document.querySelector(".nav-items");

closed;

function enableVisabitiySidebar(element) {
    element.setAttribute("aria-hidden", "false");
    console.log(element);
}

function disableVisabitiySidebar(element) {
    element.setAttribute("aria-hidden", "true");
    console.log(element);
}

openbtn.addEventListener("click", (e) => {
    enableVisabitiySidebar(toggle);
});
closebtn.addEventListener("click", (e) => {
    disableVisabitiySidebar(toggle);
});
