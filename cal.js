//query
let cape = document.querySelector('#cape');
let currency = document.querySelector('#currency');

//addEventListener
cape.addEventListener('keyup', calculate);
currency.addEventListener('keyup', calculate);

//perform function
function calculate(event){
  let input = event.currentTarget;
  
  if (input.id === 'cape'){
    // Code for cape
    let value = parseInt(input.value);
    currency.value = value/11.11;
  }
  else{
    // code for currency
    let value = parseInt(input.value);
    cape.value = value * 11.11;
    
  }
}