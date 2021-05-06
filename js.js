let num1 = document.querySelector('#ans .num1');
let num2 = document.querySelector('#ans .num2');
let oper = document.querySelector('#ans .oper');
let equal = document.querySelector('#ans .equal');
let result = document.querySelector('#ans .result');

let click1;
let click2;
let click3;
let click4;

const buttons = document.querySelectorAll('#calc div');
buttons.forEach(function (button) {
    button.onclick = (function () {
        if (!click1 && !click2&& !click3) {
            if(button.classList.contains('num')){
                num1.innerHTML = button.innerHTML;
                click1=  button.innerHTML;

            }
        }
        if (click1 && !click2&& !click3) {
            if(button.classList.contains('op')){
                oper.innerHTML = button.innerHTML;
                click2=  button.innerHTML;

            }
        }
        if (click1 && click2&& !click3) {
            if(button.classList.contains('num')){
                num2.innerHTML = button.innerHTML;
                click3=  button.innerHTML;

            }
        }
        if (click1 && click2 && click3) {
            if(button.classList.contains('eq')){
                equal.innerHTML = button.innerHTML;
                click4=  button.innerHTML;

            }
        }
        if (click1 && click2 && click3 && click4) {

            // result.innerHTML=function(click1,click2,click3){
                if(click2==='+'){
                   result.innerHTML= Number(click1)+Number(click3);
                }
                else
                if(click2==='-'){
                    result.innerHTML= click1-click3; 
                }
                else
                if(click2==='*'){
                    result.innerHTML=click1*click3;
                }
                else
                if(click2==='/'){
                    result.innerHTML=click1/click3; 
                }
            }

            if(button.classList.contains('ac')){
                num1.innerHTML = ' ';
               oper.innerHTML = ' ';
                num2.innerHTML = ' ';
               equal.innerHTML = ' ';
               
               result.innerHTML = ' ';
               click1 = null;
               click2 = null;
               click3 = null;
               click4 = null;
            }

    })
})


