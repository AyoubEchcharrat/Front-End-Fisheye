function photographerFactory(data) {
    const { name, portrait , tagline , city, country , price , id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const a = document.createElement( 'a' );
        a.href = `photographer.html?id=${id}`;
        const location = document.createElement( 'h3' );
        location.textContent = city + ', ' + country;
        const text = document.createElement( 'p' );
        text.textContent = tagline;
        const priceday = document.createElement( 'p' );
        priceday.textContent = price + '€/jour';

        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(a)
        article.appendChild(location);
        article.appendChild(text);
        article.appendChild(priceday);
        //console.log(article)
        return (article);
    }

    return { name, picture, getUserCardDOM }
}

async function foundPhotographer(photographers,IDselect){ //retourne le photographe correspondant
    let foundUser = null ;
    //console.log("ID recherché : ",IDselect)


    for (let key in photographers) {
        //console.log("boucle -> id : ",photographers[key].id)
        if (photographers[key].id == IDselect){
            foundUser = photographers[key];
            break
        }
    }
    //console.log("foundUser = ",foundUser)
    return await foundUser
}

async function displayOnPageFactory(photographers,IDselect) { //affiche les élém. de presentation
    
    foundUser = await foundPhotographer(photographers,IDselect);

    const { name, portrait , tagline , city, country , price} = foundUser;

    const picture = `assets/photographers/${portrait}`;
    const photographHeader = document.querySelector(".photograph-header");
    const button = document.querySelector(".contact_button");
    const main = document.querySelector("#main");

    const infoBlocLeft = document.createElement( 'article' );
    const infoBlocRight = document.createElement( 'article' );
    infoBlocLeft.classList.add("infoBlocLeft");

    const infoBlocTarif = document.createElement('article');
    infoBlocTarif.classList.add("infoBlocTarif");
    const putPrice = document.createElement( 'p' );
    putPrice.textContent = price +"€ /jour";

    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    const location = document.createElement( 'p' );
    location.textContent = city + ', ' + country;
    const text = document.createElement( 'p' );
    text.textContent = tagline;


    infoBlocTarif.append(putPrice);
    infoBlocLeft.append(h1);
    infoBlocLeft.append(text);
    infoBlocLeft.append(location);
    infoBlocRight.append(img)
    photographHeader.prepend(infoBlocLeft)
    photographHeader.append(infoBlocRight);
    main.append(infoBlocTarif)
}

async function mediaFactory(media,IDselect) { //affiche les médias
    
    let foundMedia = [] ;
    //console.log("ID recherché : ",IDselect)


    for (let key in media) {
        //console.log("boucle -> id : ",media[key].photographerId)
        if (media[key].photographerId == IDselect){
            if(media[key].image){
                foundMedia.push(media[key].image)
            }else{
                foundMedia.push(media[key].video)
            }
        }
    }
    //console.log("foundMedia = ",foundMedia)
    return await foundMedia
}


async function displayMediaFactory(media,photographers,IDselect){

    let foundMedia = await mediaFactory(media,IDselect);
    //console.log(foundMedia)
    let foundUser = await foundPhotographer(photographers,IDselect);

    const { name } = foundUser;

    const firstName = name.split(' ')[0];
    //console.log(firstName)

    for (let key in foundMedia){
        const imageURL = `assets/Sample Photos/${firstName}/${foundMedia[key]}`;
        //console.log(imageURL)


        let blocImage = document.querySelector(".media-container");
        let card = document.createElement('article');
        card.classList.add('photographer-card')
        blocImage.append(card)

        const afterDot = imageURL.split('.');
        //console.log(afterDot[1]);
        if(afterDot[1]== 'mp4'){
            let video = document.createElement('video');
            video.src = imageURL;
            video.classList.add('photographer-card__video')
            card.append(video)
        }else{
            let image = document.createElement('img');
            image.setAttribute('src',imageURL)
            image.classList.add('photographer-card__image')
            card.append(image)
            setTimeout(() => {
                let realWidth = image.naturalWidth;
            let realHeight = image.naturalHeight;
            console.log("width = " + realWidth + ", " + "height = " + realHeight);
            if(realWidth>realHeight){
                console.log("injection de landscape")
                image.classList.add('photographer-card__image__landscape') 
            }
            console.log("-------")
              }, "1000")
            
        }
    }

}
