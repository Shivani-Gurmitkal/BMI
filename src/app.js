function bmi(){
  let height = document.getElementById('height');
  let weight = document.getElementById('weight');
  let result = document.getElementById('result');
  // let btn = document.getElementById('btn');
  let range = document.getElementById('range');
  let total = (weight.value / (height.value * height.value)).toFixed(2);
  result.innerText = total;
  let rangeValue = '';
  if( total < 18.5 ){
    rangeValue = 'Underweight';
  }
    else if( total >= 18.5 && total <= 24.9){
      rangeValue = 'Normal weight';
    }
    else if( total >= 25 && total <= 29.9){
      rangeValue = 'Overweight';
    }
    else if(total >= 30 && total <= 35){
      rangeValue ='Obesity';
    }
    else{
      rangeValue = 'Severe obesity';
    }
  range.innerText  = rangeValue;
  height.value = '';
  weight.value = '';
  // btn.style.display = 'none';
}
