import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');
  const passwordLengthDisplay = document.getElementById('passwordLength');
  const iceCreamInput = document.getElementById('iceCream');
  const formMessage = document.getElementById('formMessage');
  const nameError = document.getElementById('nameError');
  
  // Előre definiált fagylaltok listája
  const iceCreams = [
      { name: 'Vanília', price: 300 },
      { name: 'Csokoládé', price: 350 },
      { name: 'Eper', price: 320 },
      { name: 'Puncs', price: 330 }
  ];

// Jelszó hossz számláló frissítése gépelés közben
passwordInput.addEventListener('input', function() {
  const length = passwordInput.value.length;
  passwordLengthDisplay.textContent = `${length} / 8`;

  // Opció: Ha eléri a max hosszúságot, megakadályozhatod a további gépelést
  if (length >= 8) {
      passwordInput.value = passwordInput.value.substring(0, 8);
  }
});

  // Név validálása, hogy nem üres-e
  nameInput.addEventListener('blur', function() {
      const name = nameInput.value.trim();
      if (!name) {
          nameError.textContent = 'A név nem lehet üres!';
      } else {
          nameError.textContent = '';
      }
  });

  // Fagylalt ellenőrzése rendeléskor
  iceCreamInput.addEventListener('blur', function() {
      const selectedIceCream = iceCreamInput.value.trim();
      const foundIceCream = iceCreams.find(iceCream => iceCream.name.toLowerCase() === selectedIceCream.toLowerCase());

      if (foundIceCream) {
          iceCreamInput.classList.add('valid');
          iceCreamInput.classList.remove('invalid');
      } else {
          iceCreamInput.classList.add('invalid');
          iceCreamInput.classList.remove('valid');
      }
  });

  // Az űrlap elküldésekor validálás
  document.getElementById('iceCreamForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Az űrlap ne küldjön el adatokat

      const selectedIceCream = iceCreamInput.value.trim();
      const foundIceCream = iceCreams.find(iceCream => iceCream.name.toLowerCase() === selectedIceCream.toLowerCase());

      if (foundIceCream) {
          formMessage.innerHTML = `<div class="alert alert-success">A választott fagylalt ára: ${foundIceCream.price} Ft.</div>`;
      } else {
          formMessage.innerHTML = `<div class="alert alert-warning">Beszerzés folyamatban...</div>`;
      }
  });
});
