import { handleNewsletterSubmit } from "./src/components/newsletterForm.js";

document.addEventListener("DOMContentLoaded", () => {
  //Menu hamburguer button
  // document.getElementById("menuButton").addEventListener("click", function () {
  //   let checkbox = document.getElementById("menuCheckbox");
  //   checkbox.checked = !checkbox.checked;
  // });

  //newsletterForm
  document
    .getElementById("newsLetterForm")
    .addEventListener("submit", handleNewsletterSubmit);
});

document.querySelectorAll("[data-toggle]").forEach((title) => {
  title.addEventListener("click", () => {
    const item = title.closest(".linkItem");
    item.classList.toggle("open");
  });
});

//   modal
const deptos = document.querySelectorAll(".departamentosList li");
const categorias = document.querySelectorAll(".categoriasGrupo");

deptos.forEach((depto) => {
  depto.addEventListener("mouseenter", () => {
    const target = depto.dataset.depto;
    categorias.forEach((c) => {
      c.classList.toggle("active", c.dataset.target === target);
    });
  });
});

const todasCategorias = document.querySelector(".navLinks .links:first-child");
const modal = document.getElementById("departamentosModal");

todasCategorias.addEventListener(
  "mouseenter",
  () => (modal.style.display = "block")
);
modal.addEventListener("mouseleave", () => (modal.style.display = "none"));

function adjustTopSpacing() {
  const header = document.querySelector("header");
  const nextElement = document.getElementById("main");
  if (header && nextElement) {
    const headerHeight = header.offsetHeight;
    nextElement.style.marginTop = `${headerHeight}px`;
  }
}

window.addEventListener("load", adjustTopSpacing);
window.addEventListener("resize", adjustTopSpacing);
