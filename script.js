document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const capital = document.getElementById('capital').value;
  const suyos = document.getElementById('suyos-pregunta').value;
  const puntos = Number(capital === 'cusco') + Number(suyos === '4');
  document.getElementById('resultado').textContent = `${nombre}, obtuviste ${puntos} de 2 respuestas correctas. ${puntos === 2 ? '¡Excelente trabajo!' : 'Revisa las secciones de historia y organización territorial.'}`;
});
