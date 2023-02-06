export default function validation(inputs) {
  const userErrors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = /^(?=\w*\d)\S{6,10}$/;


  if (!regexEmail.test(inputs.username)) {
    userErrors.username = "Email";
  }
  if (!inputs.username) {
    userErrors.username = "No dejar vacío";
  } else if (inputs.username.length > 35) {
    userErrors.username = "Max 35 caracteres";
  }

  if (!regexPass.test(inputs.password)) {
    userErrors.password =
      "Min 1 num y 6/10 caracteres";
  }

  return userErrors;
}
