const form = document.querySelector('.form');
const submitButton = form.querySelector('.panel__button');
const modalFailure = document.querySelector('.modal--failure');
const failureButton = modalFailure.querySelector('.modal__button');
const modalSucces = document.querySelector('.modal--succes');
const succesButton = modalSucces.querySelector('.modal__button');

const requiredInputChecker = () => {
    let inputs = form.querySelectorAll('.js-required-input');
    let emailInput = form.querySelector('.feedback__email');

    for (input of inputs) {
        if (input.value === '' || emailInput.validity.typeMismatch) {
            modalFailure.classList.add('modal--active');
            return false;
        }
    }

    return true;
};

const submitForm = () => {
    if (requiredInputChecker()) {
        form.submit();
        modalSucces.classList.add('modal--active');
    }
};

const modalCloser = (modal) => {
    modal.classList.remove('modal--active');
};

const modalKeyCloser = (modal, event) => {
    if (event.keyCode !== 27 && !modal.classList.contain('modal--active')) {
        return;
    }
    event.preventDefault();
    modal.classList.remove('modal--active');
};

failureButton.addEventListener('click', () => {
    modalCloser(modalFailure);
});

succesButton.addEventListener('click', () => {
    modalCloser(modalSucces);
});

window.addEventListener('keydown', (evt) => {
    modalKeyCloser(modalFailure, evt);
    modalKeyCloser(modalSucces, evt);
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    requiredInputChecker();
    submitForm();
});