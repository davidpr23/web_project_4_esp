
let like = document.querySelectorAll(".card__like");

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


let profileEdit = document.querySelector('.profile__edit');
let closebuttonPopup = document.querySelector('.popup__close');
let popup = document.querySelector('.container-popup');

let profileName = document.querySelector('.profile__name');
let profileExplorador = document.querySelector('.profile__explorador');

let inputName = document.querySelector('#popup__input-name');
let inputAbout = document.querySelector('#popup__input-about');

function showPopup(){
    popup.classList.add('container-popup__active')
    inputName.placeholder = profileName.textContent;
    inputAbout.placeholder = profileExplorador.textContent;
}

function closePopup(){
    popup.classList.remove('container-popup__active')
}
profileEdit.addEventListener('click', showPopup);
closebuttonPopup.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__form');

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileExplorador.textContent = inputAbout.value;
    closePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit); 