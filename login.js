function validateLoginForm() {
    
    var email = document.getElementById('adresaEmailit').value;
    var password = document.getElementById('pass').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ju lutem shënoni një email valid!');
      return false;
    }

    if (password.trim() === '') {
        alert('Ju lutem shkruani fjalkalimin tuaj.');
        return false;
    }
    return true;
}

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    if (validateLoginForm()) {
        alert('Forma u validua me sukses! Mund të vazhdoni me log-in.');
    }
});
dfhshfbhkshbkfbks
