document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const errorMessage = document.getElementById('errorMessage');
  
  if (!name || !email || !age) {
      errorMessage.textContent = 'Minden mezőt ki kell tölteni!';
      errorMessage.classList.remove('d-none');
  } else {
      errorMessage.classList.add('d-none');
      alert('Az adatok megfelelőek!');
  }
});
