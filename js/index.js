// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) => {
   if(state.mushrooms) mush.style.visibility='visible'
   else mush.style.visibility= 'hidden'
  })
 }

 function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((gP) =>{
   if(state.greenPeppers) gP.style.visibility='visible'
   else gP.style.visibility='hidden'
  })
 }

function renderWhiteSauce() {
  if(state.whiteSauce) document.querySelector('.sauce-white').style.visibility='visible'
   else document.querySelector('.sauce-white').style.visibility='hidden'
}

function renderGlutenFreeCrust() {
 if(state.glutenFreeCrust) document.querySelector('.crust-gluten-free').style.visibility='visible'
 else document.querySelector('.crust-gluten-free').style.visibility='hidden'
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn-mushrooms').addEventListener('click', function() {
  state.mushrooms=!state.mushrooms
  renderEverything()
})

document.querySelector('.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers=!state.greenPeppers
  renderEverything()
})

document.querySelector('.btn-sauce').addEventListener('click', function(){
  state.whiteSauce=!state.whiteSauce
  renderEverything()
})

document.querySelector('.btn-crust').addEventListener('click', function(){
  state.glutenFreeCrust=!state.glutenFreeCrust
  renderEverything()
})