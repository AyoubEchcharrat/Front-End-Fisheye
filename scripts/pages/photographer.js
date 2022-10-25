//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    return await fetch("https://ayoubechcharrat.github.io/Front-End-Fisheye/data/photographers.json")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        console.log(value.photographers);
        return (value)
    })
    .catch(function(err){
        console.log(err);
    })
}

async function getID(){
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id'); 

    console.log(id);
    return id
}



async function displayOnPageFactory(photographers,IDselect) {
    
    let foundUser = null ;
    console.log("ID recherché : ",IDselect)


    for (let key in photographers) {
        console.log("boucle -> id : ",photographers[key].id)
        if (photographers[key].id == IDselect){
            foundUser = photographers[key];
            break
        }
    }
    console.log("foundUser = ",foundUser)

    const { name, portrait , tagline , city, country , price , id} = foundUser;

    const picture = `assets/photographers/${portrait}`;
    const photographHeader = document.querySelector(".photograph-header");
    const button = document.querySelector(".contact_button");

    const infoBlocLeft = document.createElement( 'article' );
    const infoBlocRight = document.createElement( 'article' );
    infoBlocLeft.classList.add("infoBlocLeft");

    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    const location = document.createElement( 'p' );
    location.textContent = city + ', ' + country;
    const text = document.createElement( 'p' );
    text.textContent = tagline;

    infoBlocLeft.append(h1);
    infoBlocLeft.append(text);
    infoBlocLeft.append(location);
    infoBlocRight.append(img)
    photographHeader.prepend(infoBlocLeft)
    photographHeader.append(infoBlocRight);
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const IDselect = await getID();
    displayOnPageFactory(photographers, IDselect);
};

init();