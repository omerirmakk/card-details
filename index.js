'use strict';
const cardName = document.querySelector('.name');
const cardName2 = document.querySelector('.card-name');
const ccv = document.getElementById('card-backward');
const ccvNumber = document.querySelector('.cvcnumber');
const submit = document.querySelector('.submit');
const cardNumber = document.querySelector('.card-number');
const cardNumber2 = document.querySelector('.card-number2');

// ccvNumber.addEventListener('input', () => {
//   ccv.textContent = ccvNumber.value;
// });
function changeValue(holder, ining) {
  holder.textContent = ining.value;
}

ccvNumber.oninput = function () {
  changeValue(ccv, ccvNumber);
};
cardNumber2.oninput = function () {
  changeValue(cardNumber, cardNumber2);
};
cardName2.oninput = function () {
  changeValue(cardName, cardName2);
};

submit.addEventListener('click', () => {
  ccv.textContent = ccvNumber.value;
});
