document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Мы свяжемся с вами.");
      form.reset();
    });
  });