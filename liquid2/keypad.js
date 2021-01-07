const phone = document.querySelector('#phone');

const keypad = (x) => {
    x = x.toString();
    phone.value += x;
};

const deleteValue = () => {
    let cv = phone.value;
    cv = cv.slice(0, -1);
    phone.value = cv;
};