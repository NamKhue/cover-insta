const slide_content = document.querySelector('#slide-content')

const signin_form = document.querySelector('#signin-form')

const signin_btn = document.querySelector('#signin-btn')

const darkmode_toggle = document.querySelector('#darkmode-toggle')

let inputs = signin_form.querySelectorAll('input')

let slide_index = 0

slide = () => {
    let slide_items = slide_content.querySelectorAll('img')
    slide_items.forEach(e => e.classList.remove('active'))
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1
    slide_items[slide_index].classList.add('active')
}

setInterval(slide, 5000)

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

        if (checkSigninInput()) {
            signin_btn.removeAttribute('disabled')
        } else {
            signin_btn.setAttribute('disabled', 'true')
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

checkSigninInput = () => {
    return Array.from(inputs).every(input => {
        return input.value.trim().length >= 6
    })
}

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode'
}

// log in
// let url = 'http://localhost:3000/users/'

// async function makeGetRequest() {
//     let res = 
//         await axios
//         .get(url + id)
//         .catch(error => console.error(error))
//     let user = res.data

//     let newUser = {}

//     inputs.forEach(inp => {
//         if (inp.name === 'email') {
//             newUser.email = inp.value.toString()
//         }
//         else if (inp.name === 'password') {
//             newUser.password = inp.value.toString()
//         }
//     })
    
//     if (newUser.email === user.email && newUser.password === user.password) {
//         console.log('correct')
//     }
//     setTimeout(() => {
//         window.location.replace('/home.html')
//     }, 5000)
// }
// signin_btn.addEventListener('click', makeGetRequest)

// basic login
const btnFb = document.querySelector('.btn-fb')
btnFb.addEventListener('click', () => {
    window.location.replace('/home.html')
})