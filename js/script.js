const links = document.querySelectorAll(".menu a");

function atualizarLinkAtivo() {
   const hashAtual = window.location.hash || "#home";

   links.forEach((link) => {
      const ativo = link.getAttribute("href") === hashAtual;
      link.classList.toggle("ativo", ativo);

      if (ativo) {
         link.setAttribute("aria-current", "location");
      } else {
         link.removeAttribute("aria-current");
      }
   });
}

window.addEventListener("hashchange", atualizarLinkAtivo);
atualizarLinkAtivo();