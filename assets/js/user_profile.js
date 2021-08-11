// click menu
const userProfileIcon = document.querySelector('.user_profile')
const wrapMenu = document.querySelector('.wrap__menu')
const menuList = document.querySelector('.menu-list')
const borderWrap = document.querySelector('.border-wrap')
borderWrap.classList.add('active')
// click noti
const notiIcon = document.querySelector('.icon-noti')
const wrapNoti = document.querySelector('.wrap__noti')
const headerNoti = document.querySelector('.header__noti')
const notiIconActive = document.querySelector('.icon-noti .icon-active img')
const notiIconNonActive = document.querySelector('.icon-noti .icon-nonactive img')

window.addEventListener('click', (e) => {
    // click menu
    if (userProfileIcon.contains(e.target)) {
        if (menuList.contains(e.target)) {
            wrapMenu.classList.add('active')
        }
        else {
            wrapMenu.classList.toggle('active')
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                wrapMenu.classList.remove('active')
            }
        })
    }
    else if (!userProfileIcon.contains(e.target)) {
        wrapMenu.classList.remove('active')
    }
    // click noti
    if (notiIcon.contains(e.target)) {
        notiIconActive.style.display = 'block'
        notiIconNonActive.style.display = 'none'

        if (headerNoti.contains(e.target)) {
            wrapNoti.classList.add('active')
            borderWrap.classList.remove('active')
        }
        else {
            wrapNoti.classList.toggle('active')
            
            let check = false
            for (let i = 0; i < wrapNoti.classList.length; i++) {
                if (wrapNoti.classList[i] == 'active') {
                    check = true
                    break
                }
            }
            if (check) {
                borderWrap.classList.remove('active')
            }
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                wrapNoti.classList.remove('active')
            }
        })
    }
    else if (!notiIcon.contains(e.target)) {
        wrapNoti.classList.remove('active')
        borderWrap.classList.add('active')
        notiIconActive.style.display = 'none'
        notiIconNonActive.style.display = 'block'
    }
})

// tab options
const postTab = document.querySelector('.tab__options-post-link')
const storyTab = document.querySelector('.tab__options-story-link')
const saveTab = document.querySelector('.tab__options-save-link')
const taggedTab = document.querySelector('.tab__options-tagged-link')

const tabOptions = [postTab, storyTab, saveTab, taggedTab]

// body part
const bodyPost = document.querySelector('#body-post')
const bodyStory = document.querySelector('#body-story')
const bodySave = document.querySelector('#body-save')
const bodyTagged = document.querySelector('#body-tagged')

const keyWords = ['post', 'story', 'save', 'tagged']
const openTabs = [bodyPost, bodyStory, bodySave, bodyTagged]

// active icon
const iconPost = document.querySelector('.tab__options-post-icon')
const iconStory = document.querySelector('.tab__options-story-icon')
const iconSave = document.querySelector('.tab__options-save-icon')
const iconTagged = document.querySelector('.tab__options-tagged-icon')

const activeIcons = [iconPost, iconStory, iconSave, iconTagged]

// default active
openTabOption(bodyPost)
postTab.classList.add('active')
postTab.children[0].classList.add('active')

// click on tab
document.querySelector('.tab__options').addEventListener('click', (e) => {
    tabOptions.forEach(mainTab => {
        if (mainTab.contains(e.target)) {
            // non-active all
            tabOptions.forEach(tab => {
                tab.classList.remove('active')
                tab.children[0].classList.remove('active')
                activeIcons.forEach(icon => {
                    icon.style.fill = '#8e8e8e'
                })
            })
            // active tab
            mainTab.classList.add('active')
            mainTab.children[0].classList.add('active')

            // choose key in keyWords
            let key = keyWords.filter(word => {
                if (mainTab.classList.value.includes(word)) {
                    return word
                }
            }).shift()

            // active icon
            activeIcons.forEach(icon => {
                if (icon.classList.value.includes(key)) {
                    icon.style.fill = '#262626'
                }
            })

            // body part
            openTabs.forEach(bodyPart => {
                if (bodyPart.id.includes(key)) {
                    openTabOption(bodyPart)
                }
            })
        }
    })
})

function openTabOption(bodyPart) {
    for (let i = 0; i < openTabs.length; i++) {
        openTabs[i].style.display = 'none'
    }
    bodyPart.style.display = 'block'
}

// modal pictures
const body = document.querySelector('body')
const modal = document.getElementById('myModal')
const closeImgIcon = document.querySelector('.close-image')
const modalImg = document.querySelector('.image-col img')
const imgBoxs = document.querySelectorAll('.grid__image-container')
// modal slide pics
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

window.addEventListener('click', (e) => {
    var len = imgBoxs.length

    for (let i = 0; i < len; i++) {
        if (imgBoxs[i].contains(e.target)) {
            var slideIndex = i
            showSlides(imgBoxs[slideIndex])

            // change picture's source
            function plusSlides(num) {
                slideIndex += num
                // disable next button
                if (slideIndex >= len) {
                    slideIndex = len - 1
                }
                // disable back button
                if (slideIndex < 0) {
                    slideIndex = 0
                }
                showSlides(imgBoxs[slideIndex])
            }
            function showSlides(imgBox) {
                for (let key in imgBox.children) {
                    if (imgBox.children[key].className === 'image') {
                        let img = imgBox.children[key]
                        modalImg.src = img.src
                        modal.style.display = 'block'
                        body.style.overflow = 'hidden'
                    }
                }
            }
            // close modal
            prevBtn.addEventListener('click', () => {
                plusSlides(-1)
            })
            nextBtn.addEventListener('click', () => {
                plusSlides(1)
            })
            closeImgIcon.addEventListener('click', () => {
                modal.style.display = 'none'
                body.style.overflow = 'auto'
            })
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    modal.style.display = 'none'
                    body.style.overflow = 'auto'
                }
                else if (e.key === 'ArrowLeft') {
                    plusSlides(-1)
                }
                else if (e.key === 'ArrowRight') {
                    plusSlides(1)
                }
            })
            document.addEventListener('click', (e) => {
                if (!document.querySelector('.modal-image').contains(e.target) &&
                    prevBtn != e.target && nextBtn != e.target &&
                    closeImgIcon != e.target) {
                    modal.style.display = 'none'
                    body.style.overflow = 'auto'
                }
            })
        }
    }
})

