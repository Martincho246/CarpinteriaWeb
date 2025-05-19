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
  