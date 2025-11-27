// 1. Funcionalidad del Menú Hamburguesa (Mobile)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 2. Funcionalidad para Cambiar de Tema (Theme Switcher)
const themeBtn = document.getElementById("theme-toggle");
const themeLink = document.getElementById("theme-style");

// Nombres de los estilos (Estilos 1 a 5)
const themes = [
  { file: "style1.css", name: "Intenso Urbano" },
  { file: "style2.css", name: "Clínico Profesional" },
  { file: "style3.css", name: "Dinámico Sport" },
  { file: "style4.css", name: "Minimalista Premium" },
  { file: "style5.css", name: "Dark Mode Tech" },
];

let currentThemeIndex = 0;

themeBtn.addEventListener("click", () => {
  // 1. Aumentamos el índice
  currentThemeIndex++;

  // 2. Si llegamos al final, volvemos al principio (loop)
  if (currentThemeIndex >= themes.length) {
    currentThemeIndex = 0;
  }

  // 3. Cambiamos el archivo CSS
  themeLink.href = themes[currentThemeIndex].file;

  // 4. Actualizamos el texto del botón para que sepas cuál estás viendo
  themeBtn.innerHTML = `<i class="fas fa-palette"></i> ${
    themes[currentThemeIndex].name
  } (${currentThemeIndex + 1}/5)`;

  // Efecto visual consola
  console.log(`Cambiado a: ${themes[currentThemeIndex].name}`);
});
