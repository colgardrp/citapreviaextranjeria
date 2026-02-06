document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const subject = "Mensaje de contacto desde el sitio web";
    const body = `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`;

    const mailtoLink = `mailto:colgar.drop@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Reset the form
    document.getElementById("contact-form").reset();
  });

// Clock functionality
function updateClock() {
  const now = new Date();
  const weekday = String(now.toLocaleDateString('ES-es', {weekday: 'long' }));
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const dateString = `${weekday } - ${day}/${month}/${year}`;
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("fecha").innerText = dateString;
  document.getElementById("hora").innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
