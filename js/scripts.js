const firstSection = document.querySelectorAll(".rate")
const secondSection = document.querySelectorAll(".gratitude")
const buttonElement = document.querySelectorAll(".ratingButton")
const submitButtonElement = document.querySelectorAll(".submit")
const message = document.getElementById("message")

let selected = 0

let rated = false

buttonElement.forEach(button =>{
    button.addEventListener("click", () =>{
        for (let i = 0; i < buttonElement.length; i++){
            buttonElement[i].classList.replace("ratingButton-clicked","ratingButton")
        }
        button.classList.replace("ratingButton","ratingButton-clicked")

        const clicked = (button.classList.contains("ratingButton-clicked"))?button.textContent : 0
        
        rated = true
        switch(rated){
            case true:
                submitButtonElement[0].addEventListener("click", () =>{
                    firstSection[0].classList.toggle("no-display")
                    secondSection[0].classList.toggle("no-display")
                })
            break;
            default:
        }
        selected = clicked
        message.textContent = `You selected ${selected} out of 5`

    })
})
console.log(message)

