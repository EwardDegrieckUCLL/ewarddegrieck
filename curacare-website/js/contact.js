/* variables */
const responseDiv = document.querySelector("#submit-response");
const submitButton = document.querySelector("#submit");

/* functions */
const siteNotActiveYet = (e) => {
    responseDiv.innerHTML = `<p>! Deze site is nog niet operationeel. Aangemaakte formulieren worden nog niet verzonden. !</p>`;
    e.preventDefault();
};

/* run code */
submitButton.addEventListener("click", siteNotActiveYet);