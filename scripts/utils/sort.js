let triSelector = document.getElementById('tri')
triSelector.addEventListener('change', sortOnClick , false);



async function sortOnClick(){
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();    
    const IDselect = await getID();

    let container = document.querySelector('.media-container')
    let triSelector = document.getElementById('tri')
    var newMedia = {};
    newMedia = media;

    //if (triSelector[triSelector.selectedIndex].text == '')
    if(triSelector.value == 'type01'){
        newMedia.sort((a,b) => {return b.likes - a.likes})

        console.log('sort by popularity')
        console.log(newMedia)

    }
    if(triSelector.value == 'type02'){
        newMedia.sort((a,b) => {return Date(b.date) - Date(a.date)})

        console.log('sort by date')
        console.log(newMedia)
    }
    if(triSelector.value == 'type03'){
        newMedia.sort((a, b) => a.title.localeCompare(b.title));

        console.log('sort by alphabet')
        console.log(newMedia)
    }
    container.innerHTML = '';
    displayMediaFactory(newMedia,photographers,IDselect)
}


