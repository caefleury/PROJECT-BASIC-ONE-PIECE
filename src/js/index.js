


const buttons = document.querySelectorAll('.button')
const characters = document.querySelectorAll('.character')

function unToggleButton() {
    const buttonSelected = document.querySelector(".button.selected");
    buttonSelected.classList.remove("selected")
}

function unToggleCharacter() {
    const characterSelected = document.querySelector(".character.selected")
    characterSelected.classList.remove("selected")
}

buttons.forEach((button,index) =>  {
    button.addEventListener("click", () => {

        unToggleButton()
        unToggleCharacter()

        button.classList.add("selected")
        characters[index].classList.add("selected")

    });
})

