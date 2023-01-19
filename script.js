const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const btnAdd = document.querySelector('header button');
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data);
nlwSetup.load();

btnAdd.addEventListener('click', () => {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists) {
        alert("Dia já incluso");
        return;
    }
    nlwSetup.addDay(today)
})

form.addEventListener('change', () => {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
})



