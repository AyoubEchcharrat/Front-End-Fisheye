function photographerFactory(data) {
    //factory qui renvoie l'HTML de chaque vignette photographe page d'accueil
    const { name, portrait , tagline , city, country , price , id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const containerImg = document.createElement( 'div' );
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
        containerImg.classList.add('card__containerImg');
        location.classList.add('card__location');
        priceday.classList.add('card__priceday');
        text.classList.add('card__text');
        h2.classList.add('card__name');
        img.classList.add('card__img');
        a.classList.add('card__link');

        let realWidth = img.naturalWidth;
        let realHeight = img.naturalHeight;
        console.log("width = " + realWidth + ", " + "height = " + realHeight);
        if(realWidth>realHeight){
            console.log("injection de landscape")
            img.classList.add('card__img__landscape') 
        }
        console.log("-------")

        containerImg.appendChild(img)
        a.appendChild(containerImg);
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

async function displayOnPageFactory(photographers,IDselect) { 
    //affiche les élém. de presentation du photographe sur la page photographer
    
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

async function mediaFactory(media,IDselect) { 
    //renvoie les médias, page photographer
    
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


async function titleFactory(media,IDselect) { 
    //renvoie le noms des médias, page photographer
    
    let foundTitle = [] ;
    //console.log("ID recherché : ",IDselect)


    for (let key in media) {
        //console.log("boucle -> id : ",media[key].photographerId)
        if (media[key].photographerId == IDselect){
                foundTitle.push(media[key].title)
        }
    }
    //console.log("foundMedia = ",foundMedia)
    return await foundTitle
}


async function displayMediaFactory(media,photographers,IDselect){
    //HUB pour display les medias page photographer

    let foundMedia = await mediaFactory(media,IDselect);
    console.log(foundMedia)
    let foundUser = await foundPhotographer(photographers,IDselect);
    let incremen = 0;
    const { name } = foundUser;
    let foundTitle = await titleFactory(media,IDselect);
    const firstName = name.split(' ')[0];
    console.log(foundTitle)

    for (let key in foundMedia){
        const imageURL=`assets/Sample Photos/${firstName}/${foundMedia[key]}`;

        let blocImage = document.querySelector(".media-container")
        let card = document.createElement('div')
        let imgContainer = document.createElement('div')
        let infoContainer = document.createElement('div')
        let title = document.createElement('p')
        let likes = document.createElement('div')
        let number = document.createElement('p')

        likes.classList.add('photographer-likes')
        number.classList.add('photographer-numbers')
        likes.innerHTML = '<i class="fa-regular fa-heart"></i>';
        infoContainer.classList.add('photographer-infoContainer')
        card.classList.add('photographer-card')
        imgContainer.classList.add('photographer-imgContainer')
        title.classList.add('photographer-title')
        title.textContent = foundTitle[key]
        console.log(foundTitle[key])

        const afterDot = imageURL.split('.');
        //console.log(afterDot[1]);
        if(afterDot[1]== 'mp4'){//video
            console.log(afterDot[1])
            var media = document.createElement('video');
            media.src = imageURL;
            media.classList.add('photographer-card__video')
            imgContainer.append(media)
        }else{//photo
            console.log(afterDot[1])
            var media = document.createElement('img');
            media.setAttribute('src',imageURL)
            media.classList.add('photographer-card__image')
            imgContainer.append(media)
            let realWidth = media.naturalWidth;
            let realHeight = media.naturalHeight;
            console.log("width = " + realWidth + ", " + "height = " + realHeight);
            if(realWidth>realHeight){
                console.log("injection de landscape")
                media.classList.add('photographer-card__image__landscape') 
            }
            console.log("-------")
        }
        blocImage.append(card)
        card.append(imgContainer)
        likes.append(number)      
        infoContainer.append(title)
        infoContainer.append(likes)
        card.append(infoContainer)
        media.setAttribute('id','media'+incremen)
    
        
        media.addEventListener('click', function sendtolightbox() {
            // transmission d'informations sur l'media cliquée
            IDclicked = this.id;
            displayLightbox(IDclicked,foundMedia,firstName);
            Move(IDclicked,foundMedia,firstName)
        }); 
        incremen = incremen +1 ;
    }

}


async function likes(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function addingOne(heart) {
        let previous = heart.nextSibling
        number = Number(previous.innerText)
        if (heart.classList.contains('liked')){
            previous.innerText = number +1
        }else{
            previous.innerText = number -1
        }
    }

    setTimeout(() => {

        var hearts = document.querySelectorAll('.fa-heart');
        var numbers = document.querySelectorAll('.photographer-numbers');

        for (const heart of hearts) {
            heart.addEventListener('click', function liked() {
                heart.classList.toggle('liked')
                addingOne(heart)

            })
        }

        for (const number of numbers) {
            number.textContent = getRandomInt(100)
        }

    }, "500")

    

}