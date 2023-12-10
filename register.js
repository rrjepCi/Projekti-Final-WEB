function validateForm(event) {
    event.preventDefault();
  
    const emri = document.getElementById('emri').value.trim();
    const mbiemri = document.getElementById('mbiemri').value.trim();
    const userid = document.getElementById('userid').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const pass2 = document.getElementById('pass2').value.trim();
  
    if (emri === '' || mbiemri === '' || userid === '' || email === '' || pass === '' || pass2 === '') {
      alert('Ju lutem plotësoni të gjitha fushat!');
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ju lutem shënoni një email valid!');
      return false;
    }
  
    if (pass !== pass2) {
      alert('Fjalëkalimet nuk përputhen!');
      return false;
    }
  
    alert('Forma është valide, mund të dërgohet.');
}
  
document.querySelector('#register-form form').addEventListener('submit', validateForm);
  