function displayLightbox(e) {
    const modal = document.getElementById("lightbox_background");
	modal.style.display = "block";
    
    /* let actualMedia = this.closest('img');
    const attr = this.getAttribute("tabindex"); */
    console.log(e)

}

function closeLightbox() {
    const modal = document.getElementById("lightbox_background");
    modal.style.display = "none";
}
