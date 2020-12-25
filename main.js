//query
let mgold = document.querySelector('#mgold');
let usd = document.querySelector('#usd');

//addEventListener
mgold.addEventListener('keyup', calculate);
usd.addEventListener('keyup', calculate);

//perform function
function calculate(event){
  let input = event.currentTarget;
  
  if (input.id === 'mgold'){
    // Code for mgold
    let value = parseInt(input.value);
    usd.value = value/2;
  }
  else{
    // code for usd
    let value = parseInt(input.value);
    mgold.value = value * 2;
  }
}