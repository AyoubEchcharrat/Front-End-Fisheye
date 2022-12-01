function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    document.getElementById('contact-form_close-button').focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.querySelector('.logo_link').focus()
}

function closeModalByKeyPress(e) {
    if (e.code !== 'Space' && e.code !== 'Enter') {
        return
    }
    closeModal()
}

document.getElementById("contact_button").addEventListener("click", async function (e) {
    e.preventDefault();

    let firstname = document.getElementById('firstname').value
    console.log("Prénom :  " + firstname)
    let lastname = document.getElementById('lastname').value
    console.log("Nom : " + lastname)
    let email = document.getElementById('email').value
    console.log("Email : " + email)
    if (document.getElementById('yourmessage').value) {
        let yourmessage = document.getElementById('yourmessage').value
        console.log("Message : " + yourmessage)
    }
})
