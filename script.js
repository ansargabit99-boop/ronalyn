const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {
  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "×" : "☰";
  });

  links.addEventListener("click", event => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "☰";
    }
  });
}

const form = document.querySelector("[data-local-form]");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const message = document.querySelector("[data-form-message]");
    message.textContent = "Спасибо! Для быстрой связи нажмите кнопку Google Form или позвоните по номеру в шапке.";
  });
}
