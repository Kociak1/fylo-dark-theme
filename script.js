const form = document.querySelector('#form')
const email = document.querySelector('#email')
const error = document.querySelector('#error')

form.addEventListener('submit', e => {
    reg = /^\S{3,20}@\S{2,10}.\S{1,4}$/
    if(!reg.test(email.value)) {
        e.preventDefault()
        error.style = 'display:block'
    }
})
