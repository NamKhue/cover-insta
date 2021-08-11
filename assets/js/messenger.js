// click mess
const messIconActive = document.querySelector('.icon-messenger .icon-active img')
const messIconNonActive = document.querySelector('.icon-messenger .icon-nonactive img')
// click menu
const userProfileIcon = document.querySelector('.user_profile')
const wrapMenu = document.querySelector('.wrap__menu')
const menuList = document.querySelector('.menu-list')
const borderWrap = document.querySelector('.border-wrap')
// click noti
const notiIcon = document.querySelector('.icon-noti')
const wrapNoti = document.querySelector('.wrap__noti')
const headerNoti = document.querySelector('.header__noti')
const notiIconActive = document.querySelector('.icon-noti .icon-active img')
const notiIconNonActive = document.querySelector('.icon-noti .icon-nonactive img')

window.addEventListener('click', (e) => {
    // click menu
    if (userProfileIcon.contains(e.target)) {
        borderWrap.classList.add('active')
        
        messIconActive.style.display = 'none'
        messIconNonActive.style.display = 'block'

        if (menuList.contains(e.target)) {
            wrapMenu.classList.add('active')
        }
        else {
            wrapMenu.classList.toggle('active')
            
            if (!wrapMenu.classList.contains('active')) {
                borderWrap.classList.remove('active')
            }
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                wrapMenu.classList.remove('active')
                borderWrap.classList.remove('active')

                messIconActive.style.display = 'block'
                messIconNonActive.style.display = 'none'
            }
        })
    }
    else if (!userProfileIcon.contains(e.target)) {
        borderWrap.classList.remove('active')
        wrapMenu.classList.remove('active')

        messIconActive.style.display = 'block'
        messIconNonActive.style.display = 'none'
    }

    // click noti
    if (notiIcon.contains(e.target)) {
        notiIconActive.style.display = 'block'
        notiIconNonActive.style.display = 'none'
        messIconActive.style.display = 'none'
        messIconNonActive.style.display = 'block'

        if (headerNoti.contains(e.target)) {
            wrapNoti.classList.add('active')
        }
        else {
            wrapNoti.classList.toggle('active')
            
            if (!wrapNoti.classList.contains('active')) {
                notiIconActive.style.display = 'none'
                notiIconNonActive.style.display = 'block'
                messIconActive.style.display = 'block'
                messIconNonActive.style.display = 'none'
            }
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                wrapNoti.classList.remove('active')

                notiIconActive.style.display = 'none'
                notiIconNonActive.style.display = 'block'
                messIconActive.style.display = 'block'
                messIconNonActive.style.display = 'none'
            }
        })
    }
    else if (!notiIcon.contains(e.target)) {
        wrapNoti.classList.remove('active')
        
        notiIconActive.style.display = 'none'
        notiIconNonActive.style.display = 'block'
        messIconActive.style.display = 'block'
        messIconNonActive.style.display = 'none'
    }
})

// select user then active in box chat
const users = document.querySelectorAll('.user')

users.forEach(user => {
    user.addEventListener('click', () => {
        users.forEach(user => {
            user.classList.remove('active')
        })
        user.classList.add('active')
    })
})

// auto scroll down to see mess easily
const boxchat = document.querySelectorAll('.boxchat__body')
const obj_scroll = boxchat[boxchat.length - 1].lastElementChild.classList.value
const auto_scroll = '.' + obj_scroll

document.querySelectorAll(auto_scroll).forEach((obj) => {
    obj.scrollIntoView(false)
})