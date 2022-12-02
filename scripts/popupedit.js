//Cambiar datos en el perfil que fueron agregados en el popup edit
/*function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileExplorador.textContent = inputAbout.value;
  togglePopupEdit();
}

formElementEdit.addEventListener("submit", handleProfileFormSubmit); */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}_error`)
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__form-input_type_error')
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}_error`)
  errorElement.textContent = "";
  inputElement.classList.remove('popup__form-input_type_error')
}

const isvalid = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }else{
    hideInputError(formElement, inputElement);
  }
}

const validityInputs = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__form-input"))
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isvalid(formElement, inputElement);
    })
  })
} 
const validityForm = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault()
    })

    validityInputs(formElement);
  })
}
//para comprobar si todos los campos son validas, entonces desbloqueamos el button del formulario
const buttonInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

validityForm()