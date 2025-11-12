
function sendEmailIndex() {
  const formData = {
    firstName: document.getElementById("IndexName").value,
    email: document.getElementById("IndexEmail").value,
    phone: document.getElementById("IndexPhone").value,
    message: document.getElementById("IndexMessage").value,
  };

  if (!formData.firstName || !formData.email || !formData.phone || !formData.message) {
    alert("Please fill in all the fields");
    return;
  }


  const serviceID = "service_z4ao0v8"; 
  const templateID = "template_sdv31mr";

  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      alert("Your details have been sent successfully!");
      document.getElementById("IndexName").value = "";
      document.getElementById("IndexEmail").value = "";
      document.getElementById("IndexPhone").value = "";
      document.getElementById("IndexMessage").value = "";
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send details. Please try again later.");
    });
}
