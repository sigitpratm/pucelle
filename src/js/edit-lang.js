let btnIdLang = document.querySelectorAll('.id-lang')
let btnEnLang = document.querySelectorAll('.en-lang')


window.addEventListener('DOMContentLoaded', function () {
    let lsLang = window.localStorage.getItem('used-lang')

    if (lsLang === '' || lsLang === null || lsLang === undefined) {
        document.getElementById('id-lang').click()
    } else if (lsLang === 'id') {
        document.getElementById('id-lang').click()
    } else if (lsLang === 'en') {
        document.getElementById('en-lang').click()
    }

    document.getElementById('id-lang').addEventListener('click', function () {
        // changeIdLang()
        window.localStorage.setItem('used-lang', 'id')
    })


    document.getElementById('en-lang').addEventListener('click', function () {
        // changeEnLang()
        window.localStorage.setItem('used-lang', 'en')
    })

})

btnIdLang.forEach((element) => {
    element.addEventListener("click", function () {
        element.classList.add('active-lang')
        document.getElementById('en-lang').classList.remove('active-lang')
    })
})


btnEnLang.forEach((element) => {
    element.addEventListener("click", function () {
        element.classList.add('active-lang')
        document.getElementById('id-lang').classList.remove('active-lang')
    })
})

function changeIdLang() {
    let descFooter = document.getElementById('desc-footer')
    descFooter.innerText = lang.ID.footer.desc
}

function changeEnLang() {
    let descFooter = document.getElementById('desc-footer')
    descFooter.innerText = lang.EN.footer.desc
}

