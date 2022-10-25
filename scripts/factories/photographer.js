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
        a.href = `../Front-End-Fisheye/photographer.html?id=${id}`;
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
        console.log(article)
        return (article);
    }

    return { name, picture, getUserCardDOM }
}

