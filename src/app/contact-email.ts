import emailjs from "@emailjs/browser";

export function sendContactEmail(
  form: HTMLFormElement,
  sendForm = emailjs.sendForm,
) {
  return sendForm(
    "service_p8wu66d",
    "template_7ti3r67",
    form,
    "W_I43WzDc6zC21E-N",
  );
}
