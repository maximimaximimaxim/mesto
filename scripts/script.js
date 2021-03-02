let showPopupButton = document.querySelector('#popup-on');
let popup = document.querySelector('.popup');
let closePopuoButton = document.querySelector('#popup-off');

function showClosePopup() {
    popup.classList.toggle('popup_opened');
}

showPopupButton.addEventListener('click', showClosePopup);
closePopuoButton.addEventListener('click', showClosePopup);


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-item_name');
let jobInput = document.querySelector('.popup__form-item_job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__subtitle').textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
