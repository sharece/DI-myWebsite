const openModalBtn = document.querySelector(".contactBtn");
const modal = document.querySelector(".modal");
const closeModalBtn = modal.querySelector(".modal__close-btn");

function openModal() {
  modal.classList.add("modal_is_open");
}

function closeModal() {
  modal.classList.remove("modal_is_open");
}

openModalBtn.addEventListener("click", openModal, false);
closeModalBtn.addEventListener("click", closeModal, false);

// class
