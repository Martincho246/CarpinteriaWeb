// Función para alternar la visibilidad del menú móvil
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
      mobileMenu.classList.toggle('-translate-x-full'); // Mueve el menú hacia adentro/afuera
      mobileMenu.classList.toggle('translate-x-0'); // Clase para mostrarlo
  } else {
      console.error("Elemento con ID 'mobile-menu' no encontrado.");
  }
}

// Cerrar el menú al hacer clic en un enlace (útil en móviles)
// Apunta a los enlaces dentro del nuevo contenedor del menú móvil
const navLinksMobile = document.querySelectorAll('#mobile-menu a');

navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
          mobileMenu.classList.remove('translate-x-0');
          mobileMenu.classList.add('-translate-x-full'); // Esconde el menú
      }
  });
});

// Mostrar u ocultar campos "Otro" para el formulario de pedido
document.getElementById("tipoMadera").addEventListener("change", function () {
  const otroTipoMaderaContainer = document.getElementById("otroTipoMaderaContainer");
  otroTipoMaderaContainer.style.display = this.value === "Otro" ? "block" : "none";
});

document.getElementById("tipoSector").addEventListener("change", function () {
  const otroSectorContainer = document.getElementById("otroSectorContainer");
  otroSectorContainer.style.display = this.value === "Otro" ? "block" : "none";
});

document.getElementById('formularioPedido').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const tipoMad = document.getElementById('tipoMadera').value;
  const otroTipMad = document.getElementById('otroTipoMadera').value.trim();
  let tipoFinalMad = tipoMad === 'Otro' ? otroTipMad : tipoMad;

  const tipSect = document.getElementById('tipoSector').value;
  const otroSect = document.getElementById('otroSector').value.trim();
  let tipoFinalSect = tipSect === 'Otro' ? otroSect : tipSect;

  if (tipoMad === 'Otro' && otroTipMad === '') {
      alert("Por favor completá el tipo de material.");
      return;
  }
  if (tipSect === 'Otro' && otroSect === '') {
      alert("Por favor completá el sector.");
      return;
  }
  
  const mensaje = `¡Hola Omar! Estoy interesado/a en solicitar un amoblamiento de **${tipoFinalMad}**, para el sector de **${tipoFinalSect}**. ¿Podrían asesorarme?`; // Mensaje más descriptivo
  const telefono = '3492327644';
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
});
  