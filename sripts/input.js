export const input = () => {
    let inputList = document.querySelectorAll('.input')
    inputList.forEach((input) => {
        input.addEventListener('keypress', (e) => {
            console.log(e.key)
            if ((/[^а-яё-]/i.test(e.key)) && e.key !== ' ') { /*\-\w\s*/
                e.preventDefault()
            }
        })
        input.addEventListener('blur', (e) => {
            let validateStr = e.target.value.replace(/[^а-яё\s-]/g,"").replace(/\s+/g, " ").replace(/-+/g,"-").replace(/^-+|-+$/gi,"").trim()
            e.target.value = validateStr.charAt(0).toUpperCase() + validateStr.slice(1)
        })
    })

    let form = document.querySelector(".form")
    let formContainer = document.querySelector(".form-container")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let paragraph = document.createElement('p')
        paragraph.innerHTML = Array.from(inputList).map(input => input.value).join(" ")
        formContainer.appendChild(paragraph)
        inputList.forEach(input => input.value = "")
    })
}