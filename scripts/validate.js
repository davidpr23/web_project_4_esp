const enableValidation = ({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-save",

  inactiveButtonClass: "form__submit-inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "form__message_active",
  popupFormEdit: "popup__form-edit",
  popupFormAdd: "popup__form-add",

  inputName: "#popup__input-name",
  inputAbout: "#popup__input-about",
  inputTitle: "#popup__input-title",
  inputLink: "#popup__input-link"
}); 

const showInputError = (formElement, inputElement, errorMessage, enableValidation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}_error`)
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidation.errorClass)
  inputElement.classList.add(enableValidation.inputErrorClass)
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}_error`)
  errorElement.textContent = "";
  errorElement.classList.remove(enableValidation.errorClass)
  inputElement.classList.remove(enableValidation.inputErrorClass)
}

const isvalid = (formElement, inputElement, enableValidation) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage, enableValidation);
  }else{
    hideInputError(formElement, inputElement);
  }
}

const validityInputs = (formElement, enableValidation) => {
  const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector))
  const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector)
  toggleButtonState(inputList, buttonElement, enableValidation)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isvalid(formElement, inputElement, enableValidation);
      toggleButtonState(inputList, buttonElement, enableValidation)
    })
  })
} 
const validityForm = (enableValidation) => {
  const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault()
      saveFormSubmit(formElement, enableValidation);
    })

    validityInputs(formElement, enableValidation);
  })
}

const buttonInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement, enableValidation) => {
  if(buttonInvalidInput(inputList)){
    buttonElement.classList.add(enableValidation.inactiveButtonClass);
    buttonElement.disabled = true

  }else{
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    buttonElement.disabled = false
    
  }
}
const saveFormSubmit = (formElement, enableValidation) => {
  if(formElement.name === enableValidation.popupFormEdit){
    const inputName = formElement.querySelector(enableValidation.inputName).value;
    const inputAbout = formElement.querySelector(enableValidation.inputAbout).value;
    editSubmit(inputName, inputAbout)
    
  }else if(formElement.name === enableValidation.popupFormAdd){
    const inputTitle = formElement.querySelector(enableValidation.inputTitle).value;
    const inputLink = formElement.querySelector(enableValidation.inputLink).value;
    addSubmit(inputTitle, inputLink);
  }
}

validityForm(enableValidation)