//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    return await fetch("https://ayoubechcharrat.github.io/Front-End-Fisheye/data/photographers.json")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(value){
        console.log(value)
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

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();    
    const IDselect = await getID();
    displayOnPageFactory(photographers, IDselect);
    mediaFactory(media, IDselect);
    displayMediaFactory(media, photographers, IDselect);
};

init();