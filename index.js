window.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("#hello");
    const button = document.querySelector("#button");

    if (button) {
        button.addEventListener("click", () => {
            heading.innerHTML = "You clicked the button!";
        })
    }
})