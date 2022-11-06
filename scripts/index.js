
const profileEdit = document.querySelector('.profile__edit');
const closeButtonPopupEdit = document.querySelector('.popup__close-edit');
const popupEdit = document.querySelector('.edit-popup');

const profileAdd = document.querySelector('.profile__button');
const closeButtonPopupAdd = document.querySelector('.popup__close-add');
const popupAdd = document.querySelector('.add-popup');

const profileName = document.querySelector('.profile__name');
const profileExplorador = document.querySelector('.profile__explorador');

const inputName = document.querySelector('#popup__input-name');
const inputAbout = document.querySelector('#popup__input-about');

const inputTitle = document.querySelector('#popup__input-title');
const inputLink = document.querySelector('#popup__input-link');

const formElementEdit = document.querySelector('.popup__form-edit');
const formElementAdd = document.querySelector('.popup__form-add');

function showPopupEdit(){
    popupEdit.classList.add('container-popup__active')
    inputName.placeholder = profileName.textContent;
    inputAbout.placeholder = profileExplorador.textContent;
}

function showPopupAdd(){
    popupAdd.classList.add('container-popup__active')
}

function closePopupEdit(){
    popupEdit.classList.remove('container-popup__active')
}

function closePopupAdd(){
    popupAdd.classList.remove('container-popup__active')
}
profileEdit.addEventListener('click', showPopupEdit);
closeButtonPopupEdit.addEventListener('click', closePopupEdit);

profileAdd.addEventListener('click', showPopupAdd);
closeButtonPopupAdd.addEventListener('click', closePopupAdd);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileExplorador.textContent = inputAbout.value;
    closePopupEdit();
}

formElementEdit.addEventListener('submit', handleProfileFormSubmit); 