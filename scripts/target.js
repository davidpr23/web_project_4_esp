const container = document.querySelector('.main');
const cardContainer = container.querySelector('.elements');

const cardTemplate = document.querySelector('#card-template').content;

function emptyCard(empty){
    const alertCard = cardContainer.querySelector('.empty-card');
    if(empty.length != 0){
        alertCard.classList.add('display-none')
    }else{
        alertCard.classList.remove('display-none')
    }
}

function openImgPopup(cardImage){
    cardImage.forEach(function(item){
        item.addEventListener('click', function(evt){
            const popupImg = document.querySelector('.images-popup');
            popupImg.classList.add('container-popup__active')

            const addImgPopup = document.querySelector('.img-popup__img');
            const addImgTitlePopup = document.querySelector('.img-popup__title');
            addImgPopup.src = evt.target.src
            addImgPopup.alt = evt.target.alt
            addImgTitlePopup.textContent = evt.target.alt

            const closeButtonPopupImg = document.querySelector('.popup__close-img');
            closeButtonPopupImg.addEventListener('click', function(){
                popupImg.classList.remove('container-popup__active')
            });
        })
    })
}
function listTarget(){
    const initialCards = [
        {
            name: "Valle de Yosemite",
            link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
        },
        {
            name: "Lago Louise",
            link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
        },
        {
            name: "Montañas Calvas",
            link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
        },
        {
            name: "Latemar",
            link: "https://code.s3.yandex.net/web-code/latemar.jpg"
        },
        {
            name: "Parque Nacional de la Vanoise",
            link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
        },
        {
            name: "Lago di Braies",
            link: "https://code.s3.yandex.net/web-code/lago.jpg"
        }
    ];
    initialCards.forEach(function(item){
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
        
        cardElement.querySelector('.card__image').src = item.link;
        cardElement.querySelector('.card__image').alt = item.name;
        cardElement.querySelector('.card__name').textContent = item.name;

        const buttonLike = cardElement.querySelector('.card__like');
        buttonLike.addEventListener('click', function(evt){
            evt.target.classList.toggle("card__like_button_active")
        });

        const buttonTrash = cardElement.querySelector('.card__trash');
        buttonTrash.addEventListener('click', function(evt){
            cardElement.remove()
            emptyCard(cardContainer.querySelectorAll('.card'));
        });

        cardContainer.append(cardElement);
        
    });
    emptyCard(cardContainer.querySelectorAll('.card'));
    openImgPopup(document.querySelectorAll('.card__image'))
}

function addTarget(title, link){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = title;
    cardElement.querySelector('.card__name').textContent = title;

    const buttonLike = cardElement.querySelector('.card__like');
    buttonLike.addEventListener('click', function(evt){
        evt.target.classList.toggle("card__like_button_active")
    });

    const buttonTrash = cardElement.querySelector('.card__trash');
    buttonTrash.addEventListener('click', function(evt){
        cardElement.remove()
        emptyCard(cardContainer.querySelectorAll('.card'));
    });

    cardContainer.prepend(cardElement);
    emptyCard(cardContainer.querySelectorAll('.card'));
    openImgPopup(document.querySelectorAll('.card__image'))
}

listTarget();

function AddSubmit(evt) {
    evt.preventDefault();
    let title = inputTitle.value;
    let link = inputLink.value;
    addTarget(title, link);
    closePopupAdd();
}

formElementAdd.addEventListener('submit', AddSubmit); 