import accordion from "./accordion";

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;



const openModal = () => {
  modal.classList.add("is-open");

  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

function myFunction() {
    var pass = "hjubjbjhdgyuwj";
    var encrtoken = "abcdefghijklmn";

    //var p = lib.decrypt(encrtoken, atob(pass)); //USE THIS IN YOUR CASE
    var p = "test"; //just for example
    alert(p);
}


modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};
