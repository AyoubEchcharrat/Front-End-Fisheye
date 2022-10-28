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
    let input = document.getElementById('inputname').value
    console.log("ton nom est "+ input)
})
