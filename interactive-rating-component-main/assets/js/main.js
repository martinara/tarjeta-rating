let numberContainer = document.querySelectorAll('.rating-state__number-container__number');
let rateNumber = document.querySelector('.thankyou-state__result--number');
let submitBtn = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');

numberContainer.forEach((rate)=>{
  rate.addEventListener('click', ()=>{
    let numberSelected = rate.innerHTML;
    rateNumber.innerHTML = numberSelected;
    
    submitBtn.addEventListener('click', ()=>{
      ratingState.style.display = 'none';
      thankyouState.style.display = 'flex';
    });
  });
});

