document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
  });

  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
      nav.classList.add("visible");
  })
  
  cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
  })