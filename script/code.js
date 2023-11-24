function convertToDays() {
    let ageInput = document.getElementById('age');
    let resultParagraph = document.getElementById('result');

    let age = ageInput.value;

    if (isNaN(age) || age < 0) {
      resultParagraph.textContent = 'Please enter a valid age.';
    } else {
      let days = age * 365; // Assuming an average of 365 days in a year
      resultParagraph.textContent = 'Your age in days is approximately ' + days + ' days.';
    }
  }