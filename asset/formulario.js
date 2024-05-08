document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe normalmente
  
  // Muestra el modal con el spinner
  var spinnerModal = new bootstrap.Modal(document.getElementById('spinnerModal'), {
    backdrop: 'static',
    keyboard: false
  });
  spinnerModal.show();
  
  // Captura los datos del formulario
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var cc_nit = document.getElementById("cc_nit").value;
  var municipio = document.getElementById("cliente").value;
  var apellido = document.getElementById("apellido").value;
  var celular = document.getElementById("celular").value;
  var departamento = document.getElementById("ciudad").value;
  var aceptacionTerminos = document.getElementById("agreeCheckbox").checked;
  
  // Obtiene la fecha actual
  var fechaRegistro = new Date().toLocaleDateString(); // Obtiene solo la fecha
  
  // Construye el objeto de datos
  var datos = {
    nombre: nombre,
    correo: correo,
    cc_nit: cc_nit,
    municipio: municipio,
    apellido: apellido,
    celular: celular,
    departamento: departamento,
    aceptacionTerminos: aceptacionTerminos,
    fechaRegistro: fechaRegistro // Agrega la fecha de registro
  };
  
  // Envía los datos al webhook
  fetch('https://hook.us1.make.com/xuwt7cdemj1oo3w8vj7irmslasx89hqy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(function() {
    // Oculta el modal
    spinnerModal.hide();
    // Redirige a la siguiente URL
    window.top.location.href  = 'https://www.contegral.co/registro-exitoso';
  })
  .catch(function(error) {
    // Oculta el modal
    spinnerModal.hide();
    // Maneja el error, podrías mostrar un mensaje de error o hacer algo más
    console.error('Hubo un problema con la petición Fetch:', error);
  });
});


  // popup  tratamiento de datos

  document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar el popup al hacer clic en el botón "Aceptar términos"
    /*document.getElementById("popupTrigger").addEventListener("click", function() {
      document.getElementById("popup").style.display = "block";
    });*/
  
    // Función para cerrar el popup y marcar el checkbox al hacer clic en el botón "Cerrar"
    document.getElementById("closePopupButton").addEventListener("click", function() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("agreeCheckbox").checked = true;
    });
  
    // Función para cerrar el popup, marcar el checkbox y habilitar el botón de enviar al hacer clic en el botón "Aceptar"
    document.getElementById("acceptButton").addEventListener("click", function() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("agreeCheckbox").checked = true;
      document.getElementById("enviarBtn").disabled = false;
    });
  
    // Función para habilitar el botón de enviar al marcar el checkbox de aceptación
    document.getElementById("agreeCheckbox").addEventListener("change", function() {
      if (this.checked) {
        document.getElementById("enviarBtn").disabled = false;
      } else {
        document.getElementById("enviarBtn").disabled = true;
      }
    });
  
    // Función para evitar el envío del formulario por defecto y agregar lógica personalizada para el envío de datos
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      // Aquí puedes agregar la lógica para enviar los datos del formulario
    });
  });