function clearDisplay() {
    document.querySelector('.display').value = '';
}

function appendValue(value) {
    document.querySelector('.display').value += value;
}

function calculateResult() {
    const display = document.querySelector('.display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
