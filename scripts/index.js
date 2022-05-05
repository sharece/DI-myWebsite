const openModalBtn = document.querySelector("contactBtn");
const modal = document.querySelector("contactModal");
const closeModalBtn = modal.querySelector("modal__close-btn");

function openModal() {
  modal.classList.add("modal_open");
}

function closeModal() {
  modal.classList.remove("modal_open");
}

openModalBtn.addEventListener("click, openModal, true");
closeModalBtn.addEventListener("click, closeModal, true");

// class
