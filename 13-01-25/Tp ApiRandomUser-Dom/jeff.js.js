const userDiv = document.getElementById('userCard');
console.log(userDiv);
const randomUserApi =async ()=>{
    userDiv.innerHTML = '';
    const userData = await fetch('https://randomuser.me/api/');
    console.log(userData);
    const userDataTransformed = await userData.json();
    console.log(userDataTransformed);
    console.log(userDataTransformed.results[0]);
    let myUserData = userDataTransformed.results[0];
    console.log(myUserData.name);
    console.log(myUserData.name.first);

    let userImgUI = document.createElement('img');
    userImgUI.classList.add('card-img-top');
    userImgUI.src = myUserData.picture.large;
    // userImgUI.setAttribute('src',myUserData.picture.large);

    let cardBodyUI = document.createElement('div');
    cardBodyUI.classList.add('card-body');    

    let userName = document.createElement('h5');
    userName.classList.add('card-title');
    userName.innerText =`${myUserData.name.title}. ${myUserData.name.first} ${myUserData.name.last}`;

    let userMail = document.createElement('p');
    userMail.classList.add('card-text');
    userMail.innerText = myUserData.email;

    let userAdress = document.createElement('p');
    userAdress.classList.add('card-text');
    userAdress.innerText = `Adress : ${myUserData.location.street.number} - ${myUserData.location.street.name} (${myUserData.location.city} - ${myUserData.location.country})`;

    let userPhone = document.createElement('p');
    userPhone.classList.add('card-text');
    userPhone.innerText = `Phone : ${myUserData.phone}`;

    let randomBtnUI = document.createElement('a');
    randomBtnUI.classList.add('btn','btn-primary');
    randomBtnUI.innerText = 'Random User';

    
    cardBodyUI.append(userName,userMail,userAdress,userPhone,randomBtnUI);
    userDiv.append(userImgUI,cardBodyUI);
    
    randomBtnUI.addEventListener('click',()=>{
        console.log('Random User Clicked');
        randomUserApi();
    });

}
randomUserApi();


