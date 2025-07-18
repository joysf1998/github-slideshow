function validateMaritimeEmail() {
  const email = document.getElementById('email').value;
  const resultElement = document.getElementById('result');

  // Regular expression to check for a 7-digit number starting with "IMO"
  const imoRegex = /imo\d{7}/i;
  // Regular expression to check for a 4-7 character alphanumeric string (call sign)
  const callSignRegex = /[a-z0-9]{4,7}/i;

  if (imoRegex.test(email.split('@')[0]) || callSignRegex.test(email.split('@')[0])) {
    resultElement.textContent = 'Valid maritime email address.';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'Invalid maritime email address.';
    resultElement.style.color = 'red';
  }
}
