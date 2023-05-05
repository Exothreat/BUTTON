let button = document.querySelector(".button")

console.log(button)

button.addEventListener("click", () => {
    if (button.innerText === "Touch me") {
        button.innerText = "Don't touch me"
    } else if (button.innerText === "Don't touch me") {
        button.innerText = "Don't touch me!"
    } else if (button.innerText === "Don't touch me!") {
        button.innerText = "DON'T TOUCH ME!"
    } else {
        button.innerText = "I said: STOOOOOOOP!"
    }
})