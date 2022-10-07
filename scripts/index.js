
const like = document.querySelectorAll(".card__like");

for(let i = 0; i < like.length; i++){
    like[i].addEventListener('click', function(){
        if(like[i].classList.contains("card__like")){
            like[i].classList.remove("card__like")
            like[i].classList.add("card__like_button_active")
        }else{
            like[i].classList.remove("card__like_button_active")
            like[i].classList.add("card__like")
        }
    });
}

const profileEdit = document.querySelector('.profile__edit');
const closeButtonPopup = document.querySelector('.popup__close');
const popup = document.querySelector('.container-popup');

const profileName = document.querySelector('.profile__name');
const profileExplorador = document.querySelector('.profile__explorador');

const inputName = document.querySelector('#popup__input-name');
const inputAbout = document.querySelector('#popup__input-about');

const formElement = document.querySelector('.popup__form');

function showPopup(){
    popup.classList.add('container-popup__active')
    inputName.placeholder = profileName.textContent;
    inputAbout.placeholder = profileExplorador.textContent;
}

function closePopup(){
    popup.classList.remove('container-popup__active')
}
profileEdit.addEventListener('click', showPopup);
closeButtonPopup.addEventListener('click', closePopup);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileExplorador.textContent = inputAbout.value;
    closePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit); 