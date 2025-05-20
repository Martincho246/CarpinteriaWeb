// Función para alternar la visibilidad del menú en móviles
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.toggle('open');
  } else {
    console.error("Elemento con ID 'menu' no encontrado.");
  }
}

// Opcional: Cerrar el menú al hacer clic en un enlace (útil en móviles)
const navLinks = document.querySelectorAll('#menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

  // Mostrar u ocultar campos "Otro"
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
      alert("Por favor completá el tipo de madera.");
      return;
    }
    if (tipSect === 'Otro' && otroSect === '') {
      alert("Por favor completá el sector.");
      return;
    }
  
    const mensaje = `Buen día! Quiero solicitar un mueble de tipo: ${tipoFinalMad}, para ${tipoFinalSect}`;
    const telefono = '3492327644';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });
  