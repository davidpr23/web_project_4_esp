
const profileEdit = document.querySelector(".profile__edit");
const closeButtonPopupEdit = document.querySelector(".popup__close-edit");
const popupEdit = document.querySelector(".edit-popup");

const profileAdd = document.querySelector(".profile__button");
const closeButtonPopupAdd = document.querySelector(".popup__close-add");
const popupAdd = document.querySelector(".add-popup");

const profileName = document.querySelector(".profile__name");
const profileExplorador = document.querySelector(".profile__explorador");

const enablePopup = ({
  popupContainerSelector: ".container-popup",
  popupSelector: ".popup__item",

  togglePopup: "container-popup__active",
})

function togglePopupEdit() {
  const inputName = document.querySelector("#popup__input-name");
  const inputAbout = document.querySelector("#popup__input-about");
  
  popupEdit.classList.toggle("container-popup__active");
  inputName.placeholder = profileName.textContent;
  inputAbout.placeholder = profileExplorador.textContent;
}

function togglePopupAdd() {
  popupAdd.classList.toggle("container-popup__active");
}

profileEdit.addEventListener("click", togglePopupEdit);
closeButtonPopupEdit.addEventListener("click", togglePopupEdit);

profileAdd.addEventListener("click", togglePopupAdd);
closeButtonPopupAdd.addEventListener("click", togglePopupAdd);

const editSubmit = (inputName, inputAbout) => {
  profileName.textContent = inputName;
  profileExplorador.textContent = inputAbout;
  togglePopupEdit();
}


const hideOverlap = (enablePopup) => {
  const containerPoup = Array.from(document.querySelectorAll(enablePopup.popupContainerSelector));
  containerPoup.forEach((popupItem) => {
    const popupAll = popupItem.querySelector(enablePopup.popupSelector);
    popupItem.addEventListener("click", (evt) => {
      if(!popupAll.contains(evt.target)){
        popupItem.classList.remove(enablePopup.togglePopup);
      }
    })
    
    document.addEventListener("keydown", (evt) => {
      if(evt.key === "Escape"){
        popupItem.classList.remove(enablePopup.togglePopup);
      }
    })
  })
  
}
hideOverlap(enablePopup)

