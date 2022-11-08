function displayLightbox(e,foundMedia,firstName) {

    let lightbox = document.querySelector("#lightbox");
    lightbox.innerHTML = '';

    const modal = document.getElementById("lightbox_background");
	modal.style.display = "block";
    
    var currentImage = e.replace('media', '') ; 
    currentImage = Number(currentImage);
    console.log("current image number is : "+currentImage)
    console.log("name in database : "+foundMedia[currentImage])



    const imageURL=`assets/Sample Photos/${firstName}/${foundMedia[currentImage]}`;

    const afterDot = imageURL.split('.');//on regarde le type de fichier (mp4 ou jpg/png)
    console.log("type of media : "+afterDot[1]);
    if(afterDot[1]== 'mp4'){//video
        var media = document.createElement('video');
        media.setAttribute("controls","controls")
        media.classList.add('lightbox__currentVideo')
    }else{
        var media = document.createElement('img');
        media.classList.add('lightbox__currentImage')
    }
    lightbox.append(media)
    media.setAttribute('src',imageURL)

    console.log("---------------------------")
}

function Move(e,foundMedia,firstName){

    const chevronL = document.querySelector(".lightbox__chevronL");
    const chevronR = document.querySelector(".lightbox__chevronR");
    var currentImage = e.replace('media', '') ; 
    currentImage = Number(currentImage);
    let decalage = 1;

    chevronR.addEventListener('click', function Right() {
        currentImage = currentImage +1;
        console.log("currentImage lors du clic correspond à : "+currentImage)
        if (currentImage >= foundMedia.length){
            let newE = "media0";
            currentImage = 0;
            console.log("newE == " +newE)
            displayLightbox(newE,foundMedia,firstName)

        }else{
            let newE = ("media" + (currentImage));
            console.log("newE == " +newE)
            displayLightbox(newE,foundMedia,firstName)
        }
    });

    chevronL.addEventListener('click', function Left() {
        currentImage = currentImage -1;
        console.log("currentImage lors du clic correspond à : "+currentImage)
        if (currentImage < 0){
            let newE = "media"+(foundMedia.length-1);
            currentImage = (foundMedia.length-1);
            console.log("newE == " +newE)
            displayLightbox(newE,foundMedia,firstName)

        }else{
            let newE = ("media" + (currentImage));
            console.log("newE == " +newE)
            displayLightbox(newE,foundMedia,firstName)
        }
    });
}


function closeLightbox() {
    const modal = document.getElementById("lightbox_background");
    modal.style.display = "none";
}
