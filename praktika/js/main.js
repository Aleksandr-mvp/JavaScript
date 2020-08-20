function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}


let firstNameId = "first-name";
let firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

let lastNameId = "last-name";
let lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

let addressId = "address";
let addressEl = document.getElementById(addressId);
alertValues(addressEl);

let citiesId = "cities";
let citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

let hobbiesId = "hobbies";
let hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);

let avatarWrapperId = "avatar-wrapper";
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);




firstNameEl.value = 'Andrey';

lastNameEl.className = 'last-name-input default-input error-input';

lastNameEl.title = 'Wrong last name';

avatarEl.src = 'https://i.pinimg.com/474x/a9/3c/b4/a93cb4e0316ef9c4db83846550ff4deb.jpg';

avatarEl.title = 'I am avatar';

citiesEl.value = 'Minsk2';