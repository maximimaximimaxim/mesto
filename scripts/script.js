let showPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');

function showPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

showPopupButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-item_input_name');
let jobInput = document.querySelector('.popup__form-item_input_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

