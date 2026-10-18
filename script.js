/* JavaScript da landing page Marina Budoia.
   Os links das redes sociais ficam no index.html, marcados com comentários.
   Este script atualiza automaticamente o ano dos direitos autorais. */
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.querySelector("footer p");
  if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} Marina Budoia. Todos os direitos reservados.`;
  }
});
