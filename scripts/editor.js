const editor = document.querySelector('.editor');
const editorButtons = editor.querySelectorAll('.editor-form__control-btn');
const editorInputs = editor.querySelectorAll('.editor-form__range-container');

let editorCounter = 0;

const activeButton = (n) => {
    for (button of editorButtons) {
        button.classList.remove('editor-form__control-btn--active');
    }
    editorButtons[n].classList.add('editor-form__control-btn--active');
};

const activeRange = (n) => {
    for (input of editorInputs) {
        input.classList.remove('editor-form__range-container--active');
    }
    editorInputs[n].classList.add('editor-form__range-container--active');
}

editorButtons.forEach((item, currentBtn) => {
    item.addEventListener('click', () => {
        editorCounter = currentBtn;
        activeButton(currentBtn);
        activeRange(currentBtn);
    })
});

