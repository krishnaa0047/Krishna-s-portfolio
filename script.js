
function sendEmail(formData) {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_vlc5y8h", "template_tgyaus2", parms)
    .then(() => {
      alert("Email sent!!");
    });
  }