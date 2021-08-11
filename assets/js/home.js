// click home
const homeIconActive = document.querySelector('.icon-home .icon-active img')
const homeIconNonActive = document.querySelector('.icon-home .icon-nonactive img')
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
        
        homeIconActive.style.display = 'none'
        homeIconNonActive.style.display = 'block'

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

                homeIconActive.style.display = 'block'
                homeIconNonActive.style.display = 'none'
            }
        })
    }
    else if (!userProfileIcon.contains(e.target)) {
        borderWrap.classList.remove('active')
        wrapMenu.classList.remove('active')

        homeIconActive.style.display = 'block'
        homeIconNonActive.style.display = 'none'
    }

    // click noti
    if (notiIcon.contains(e.target)) {
        notiIconActive.style.display = 'block'
        notiIconNonActive.style.display = 'none'
        homeIconActive.style.display = 'none'
        homeIconNonActive.style.display = 'block'

        if (headerNoti.contains(e.target)) {
            wrapNoti.classList.add('active')
        }
        else {
            wrapNoti.classList.toggle('active')
            
            if (!wrapNoti.classList.contains('active')) {
                notiIconActive.style.display = 'none'
                notiIconNonActive.style.display = 'block'
                homeIconActive.style.display = 'block'
                homeIconNonActive.style.display = 'none'
            }
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                wrapNoti.classList.remove('active')

                notiIconActive.style.display = 'none'
                notiIconNonActive.style.display = 'block'
                homeIconActive.style.display = 'block'
                homeIconNonActive.style.display = 'none'
            }
        })
    }
    else if (!notiIcon.contains(e.target)) {
        wrapNoti.classList.remove('active')
        
        notiIconActive.style.display = 'none'
        notiIconNonActive.style.display = 'block'
        homeIconActive.style.display = 'block'
        homeIconNonActive.style.display = 'none'
    }
})