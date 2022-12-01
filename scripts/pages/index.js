async function getPhotographers() {
    return await fetch("data/photographers.json")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            console.log(value.photographers);
            return (value)
        })
        .catch(function (err) {
            console.log(err);
        })
    // et bien retourner le tableau photographers seulement une fois
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    console.log(photographers)
    displayData(photographers);
}

init();
