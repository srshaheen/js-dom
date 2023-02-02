const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');


const salary = one.lastElementChild

function lessSalary(){
    if(Number(one.lastElementChild.textContent) < 200000){
        one.style.display = 'none';
    }
    if(Number(two.lastElementChild.textContent) < 200000){
        two.style.display = 'none';
    }
    if(Number(three.lastElementChild.textContent) < 200000){
        two.style.display = 'none';
    }
    if(Number(four.lastElementChild.textContent) < 200000){
        two.style.display = 'none';
    }
    if(Number(five.lastElementChild.textContent) < 200000){
        two.style.display = 'none';
    }
}


