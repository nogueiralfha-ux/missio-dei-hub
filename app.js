// app.js — utilitários leves
(() => {
  // marca o menu ativo automaticamente (se quiser evoluir depois)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const items = document.querySelectorAll(".bottomNav .navItem");
  items.forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();