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
document.getElementById('formularioPedido').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const tipo = document.getElementById('tipoMadera').value;
    const otro = document.getElementById('otroTipoMadera').value.trim();
    let tipoFinal = tipo === 'Otro' ? otro : tipo;
  
    if (tipo === 'Otro' && otro === '') {
      alert("Por favor completá el tipo de madera.");
      return;
    }
  
    const mensaje = `Hola! Quiero solicitar un mueble de madera tipo: ${tipoFinal}`;
    const telefono = '3492327644';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });
  