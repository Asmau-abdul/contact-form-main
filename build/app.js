let validateForm = () => {
    let firstname = document.querySelector('#firstname')
    let firstnameerror = document.querySelector('#firstnameerror')
    let lastname = document.querySelector('#lastname')
    let lastnameerror = document.querySelector('#lastnameerror')
    let email = document.querySelector('#email')
    let emailerror = document.querySelector('#emailerror')
    let message = document.querySelector('#message')
    let messageerror = document.querySelector('#messageerror')
    let consent = document.querySelector('#consent')
    let consenterror = document.querySelector('#consenterror')
    let querytype = document.getElementsByName('querytype')
    let generalenquiry = document.querySelector('#generalenquiry')
    let supportrequest = document.querySelector('#supportrequest')
    let querytypeerror = document.querySelector('#querytypeerror')

    let isValid = true

    if (firstname.value.trim() === ""){
        firstnameerror.classList.remove('hidden')
        firstname.style = "border-color: red"
        isValid = false
    }else{
        firstnameerror.classList.add('hidden')
        firstname.style = "border-color: hsl(186, 15%, 59%)"
    }

    if (lastname.value.trim() === ""){
        lastnameerror.classList.remove('hidden')
        lastname.style = "border-color: red"
        isValid = false
    }else{
        lastnameerror.classList.add('hidden')
        lastname.style = "border-color: hsl(186, 15%, 59%)"
    }

    if (email.value.trim() === ""){
        emailerror.classList.remove('hidden')
        email.style = "border-color: red"
        email.placeholder = 'email#example.com'
        isValid = false
    }else{
        emailerror.classList.add('hidden')
        email.style = "border-color: hsl(186, 15%, 59%)"
    }

    if (message.value.trim() === ""){
        messageerror.classList.remove('hidden')
        message.style = "border-color: red"
        isValid = false
    }else{
        messageerror.classList.add('hidden')
        message.style = "border-color: hsl(186, 15%, 59%)"
    }

    if (!consent.checked){
        consenterror.classList.remove('hidden')
        consent.style = "border-color: red"
        isValid = false
    }else{
        consenterror.classList.add('hidden')
        consent.style = "border-color: hsl(186, 15%, 59%)"
    }

    if (!generalenquiry.checked && !supportrequest.checked){
        querytypeerror.classList.remove('hidden')
        isValid = false
    }else{
        querytypeerror.classList.add('hidden')
    }

    return isValid
}
let alertpopup = document.querySelector('#alertpopup')

let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateForm() == true){
        form.reset()
        alertpopup.classList.remove('hidden')
    }
})

window.addEventListener('click', () => {
    if(!alertpopup.classList.contains('hidden')){
        alertpopup.classList.add('hidden')
    }
})