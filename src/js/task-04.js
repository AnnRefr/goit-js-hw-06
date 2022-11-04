let counterValue = 0;
const span = document.querySelector("#value");
const btnInc = document.querySelector('[data-action = "increment"]');
const btnDecr = document.querySelector('[data-action = "decrement"]');

const increment = () => {
    counterValue += 1
    document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1
    document.getElementById('value').textContent = counterValue;
};

btnInc.addEventListener('click', increment);
btnDecr.addEventListener('click', decrement);

console.log(counterValue);
console.log(btnInc);
console.log(btnDecr);