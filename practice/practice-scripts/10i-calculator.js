let calculation= localStorage.getItem('calculation') || '';

      function updateCalculation (value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation',calculation);
        displayCalculation();
      }

      function displayCalculation () {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }
