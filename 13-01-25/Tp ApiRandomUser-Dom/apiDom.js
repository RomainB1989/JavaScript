const buttonUser = document.querySelector("#newRandomUser");

function addUserCard(user) {
  // crée un nouvel élément div et Modification style du div crée
  const imgUser = document.querySelector("#imgUser");
  const nameUser = document.querySelector("#nameUser");
  const infoUser = document.querySelectorAll(".infoUser");

  imgUser.src = user.img;
  nameUser.innerText = `${user.gender} ${user.firstName} ${user.lastName}`;
  infoUser[0].innerText = user.email;
  infoUser[1].innerText = `Adress : ${user.adress}`;
  infoUser[2].innerText = `Phone : ${user.phone}`;
}

const contactApiSecure =  async () => {
  const rawData = await fetch('https://randomuser.me/api/');
  
  // Vérification du statut de la réponse
  if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
      console.error("Erreur lors de la récupération des données : ", rawData.statusText);
      return; // Sortir de la fonction si la réponse n'est pas OK
  }

  const transformedData = await rawData.json();

  const user = {
    firstName: transformedData.results[0].name.first,
    lastName: transformedData.results[0].name.last,
    gender: transformedData.results[0].name.title,
    email: transformedData.results[0].email,
    adress: `${transformedData.results[0].location.street.number} - ${transformedData.results[0].location.street.name} (${transformedData.results[0].location.city} - ${transformedData.results[0].location.state} - ${transformedData.results[0].location.country})`,
    phone: transformedData.results[0].phone ,
    img: transformedData.results[0].picture.large
  };

  addUserCard(user);
};

contactApiSecure();

buttonUser.addEventListener("click", function(){
  contactApiSecure();
});


