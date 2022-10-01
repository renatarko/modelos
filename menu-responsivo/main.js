const btnMobile = document.getElementById("btn-mobile")

function toggleMenu() {
    const nav = document.querySelector(".nav")
    nav.classList.toggle("active")

    const links = document.querySelectorAll('nav ul li a')
    console.log(links)

    for (const link of links) {
        link.addEventListener('click', function () {
            nav.classList.remove("active")
        })
    }
}


btnMobile.addEventListener("click", toggleMenu)

