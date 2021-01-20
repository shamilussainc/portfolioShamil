// Form validation
document.getElementById("submitBtn").onclick = () => {
  let contact_name = document.getElementById("contact-name");
  let contact_email = document.getElementById("contact-email");
  let contact_subject = document.getElementById("contact-subject");
  let contact_message = document.getElementById("contact-message");

  if (
    contact_name.value == "" ||
    contact_email.value == "" ||
    contact_subject.value == "" ||
    contact_message.value == ""
  ) {
    document.getElementById("submitBtn").type = "button";
    document.getElementById("nomessage").click();
  } else {
    document.getElementById("submitBtn").type = "submit";
  }
};

// Form submission
$("#gform").submit((e) => {
  e.preventDefault();
  $.ajax({
    url:
      "https://script.google.com/macros/s/AKfycbyEN4eSokVSwGkj_6QPaU1xznCHny6tdCtmJQqXdKePhT2AcDG3YnA_/exec",
    data: $("#gform").serialize(),
    method: "post",
    success: function (response) {
      document.getElementById("yesmessage").click();
    },
    error: function (err) {
      document.getElementById("nomessage").click();
    },
  });
});
