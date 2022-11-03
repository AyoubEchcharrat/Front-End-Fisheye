function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.getElementById("contact_button").addEventListener("click", async function(e){
    e.preventDefault();

    let firstname = document.getElementById('firstname').value
    console.log("Prénom :  "+ firstname)
    let lastname = document.getElementById('lastname').value
    console.log("Nom : "+ lastname)
    let email = document.getElementById('email').value
    console.log("Email : "+ email)
    if (document.getElementById('yourmessage').value){
        let yourmessage = document.getElementById('yourmessage').value
        console.log("Message : "+ yourmessage)
    }
})
