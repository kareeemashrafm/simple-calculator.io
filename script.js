let value='';
let operator='';
let num1='';
let num2='';
let secondnum = false;
let iscalc=false;


function divide(num1,num2){
  if (num1!=0 && num2!=0 ){
  sum=num1/num2;}
  else{alert("Cant divide by 0!")}
}

function operate(num1,operator,num2){

    num1=parseFloat(num1);
    num2=parseFloat(num2);

  switch(operator){
     case '+':
      return num1 + num2 ;
    case '-':
    return num1 - num2
    case '*':
      return num1*num2;
    case '/':
     if(num1!=0&&num2!=0){return num1/num2;}
     else alert("You cant divide by 0!")
  }
}
let expression='';

function setdisplay(value) {
    const screen = document.getElementById('screen');

     if ((value === '+' || value === '-' || value === '*' || value === '/')&&secondnum==false) {
    if (num1 === '' || operator !== '') return; 
    operator = value;
    secondnum = true;
    screen.value = firstNum + operator;
  } else {

    if (!secondnum) {
      num1 += value;
      screen.value = num1;
    } else {
      num2 += value;
      screen.value = num1 + operator + num2;
    }
  }

  if((value === '+'|| value === '-' || value === '*'|| value === '/')&& secondnum===true)
  {const result = operate(num1,operator,num2);
  
  
  num1=result.toString();
  num2='';
  operator=value;
  secondnum=true;
  screen.value =result.toFixed(2)+operator;
  }
  if((value !== '+'|| value !== '-' || value !== '*'|| value !== '/')&& iscalc===true)
  {
    clearscreen();
    num1=value;
    screen.value=num1;
    iscalc=false;
  }

  }

  function calculate(){
     const screen = document.getElementById('screen');
  if (num1 === '' || num2 === '' || operator === '') {
    screen.value = 'Error';
    return;
  }

  const result = operate(num1,operator,num2);
  screen.value =result.toFixed(2);
  
  num1=result.toString();
  num2='';
  operator='';
  secondnum=false;
  iscalc=true;
  }

  function clearscreen(){

    num1='';
    num2='';
    operator='';
    secondnum=false;
    document.getElementById('screen').value='';

  }