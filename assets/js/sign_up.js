const signup_form = document.querySelector('#signup-form')

const signup_btn = document.querySelector('#signup-btn')

const darkmode_toggle = document.querySelector('#darkmode-toggle')

let inputs = signup_form.querySelectorAll('input')

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
    let input = e.querySelector('input')
    let button = e.querySelector('button')

    input.onkeyup = () => {
        if (input.value.trim().length > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }

        if (checkSignupInput()) {
            signup_btn.removeAttribute('disabled')
        } else {
            signup_btn.setAttribute('disabled', 'true')
        }
    }

    // show password button
    if (button) {
        button.onclick = () => {
            if (input.getAttribute('type') === 'text') {
                input.setAttribute('type', 'password')
                button.innerHTML = 'Show'
            } else {
                input.setAttribute('type', 'text')
                button.innerHTML = 'Hide'
            }
        }
    }
})

checkSignupInput = () => {
    return Array.from(inputs).every(input => {
        return input.value.trim().length >= 8
    })
}

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode'
}

// basic login
const btnFb = document.querySelector('.btn-fb')
btnFb.addEventListener('click', () => {
    window.location.replace('/home.html')
})