const dataProducts = `
[
    {
        "id": 1,
        "photo": "./img/card_photo1.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 2,
        "photo": "./img/card_photo2.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 3,
        "photo": "./img/card_photo3.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 4,
        "photo": "./img/card_photo4.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 5,
        "photo": "./img/card_photo5.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    },
    {
        "id": 6,
        "photo": "./img/card_photo6.jpg",
        "brand": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "currency": "$",
        "price": "52.00"
    }
]
`;

const elemCards = document.createElement('div');
elemCards.classList.add('cards');
document.body.appendChild(elemCards);

JSON.parse(dataProducts).forEach(item => {
    const elemCard = document.createElement('div');
    elemCard.classList.add('card');
    elemCards.appendChild(elemCard);

    const elemCardImg = document.createElement('img');
    elemCardImg.classList.add('card_img');
    elemCard.appendChild(elemCardImg);
    elemCardImg.src = item.photo;
    console.log(elemCardImg);

    const elemCardInfo = document.createElement('div');
    elemCardInfo.classList.add('card_info');
    elemCard.appendChild(elemCardInfo);

    const elemCardInfoHeading = document.createElement('a');
    elemCardInfoHeading.classList.add('card_info__heading');
    elemCardInfoHeading.setAttribute('href', '#');
    elemCardInfo.appendChild(elemCardInfoHeading);
    elemCardInfoHeading.textContent = item.brand;
    console.log(elemCardInfoHeading);

    const elemCardInfoText = document.createElement('p');
    elemCardInfoText.classList.add('card_info__text');
    elemCardInfo.appendChild(elemCardInfoText);
    elemCardInfoText.textContent = item.text;

    const elemCardInfoPrice = document.createElement('p');
    elemCardInfoPrice.classList.add('card_info__price');
    elemCardInfo.appendChild(elemCardInfoPrice);

    const elemCardInfoPriceCurrency = document.createElement('span');
    elemCardInfoPriceCurrency.classList.add('card_info__price-currency');
    elemCardInfoPrice.appendChild(elemCardInfoPriceCurrency);
    elemCardInfoPriceCurrency.textContent = item.currency;

    const elemCardInfoPriceValue = document.createElement('span');
    elemCardInfoPriceValue.classList.add('card_info__price-value');
    elemCardInfoPrice.appendChild(elemCardInfoPriceValue);
    elemCardInfoPriceValue.textContent = item.price;
});