
document.getElementById('submit').addEventListener('click', getBMI);

function getBMI(e){
  //VARIABLES
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = Math.floor(weight / (height * height) * 10000);
  const underweight = "You're in the underweight range. Consider a consultation with your GP";
  const healthyWeight = "You're in the healthy weight range. Keep it up!";
  const overweight = "You're in the overweight range"
  const obese = "You're in the obese range. See your GP for advice on losing weight as soon as possible";

  function clearFields(){
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
  }

  //CONDITIONALS

  if (result < 18){
    document.getElementById('resultsBox').style.backgroundColor = '#ffab00';
    document.getElementById('results').innerHTML = `<h1>${result}</h1>`
    document.getElementById('information').innerHTML = `<p><b>${underweight}</b></p>`;
    clearFields();
  } else if (result >= 18 && result <= 25){
    document.getElementById('resultsBox').style.backgroundColor = '#00c853';
    document.getElementById('results').innerHTML = `<h1>${result}</h1>`
    document.getElementById('information').innerHTML = `<p><b>${healthyWeight}</b></p>`;
    clearFields();
  } else if (result > 25 && result <= 30){
    document.getElementById('resultsBox').style.backgroundColor = '#ffab00';
    document.getElementById('results').innerHTML = `<h1>${result}</h1>`
    document.getElementById('information').innerHTML = `<p><b>${overweight}</b></p>`;
    clearFields();
  } else if (result > 30){
    document.getElementById('resultsBox').style.backgroundColor = '#c62828';
    document.getElementById('results').innerHTML = `<h1>${result}</h1>`
    document.getElementById('information').innerHTML = `<p><b>${obese}</b></p>`;
    clearFields();
  }

  

  clearFields();
  e.preventDefault();
};



// 
// document.getElementById('information').innerHTML = `<p>${healthyWeight}</p>`;