const inputEl = document.querySelector('#validation-input');

const onBlur = (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)){
       inputEl.classList.remove('invalid');
       inputEl.classList.add('valid');
    } else{
       inputEl.classList.add('invalid');
       inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener("blur", onBlur);