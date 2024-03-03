let year = document.getElementsByClassName("yearlySwitch")[0]
let month = document.getElementsByClassName("monthlySwitch")[0] 
function changeToYear() {
    document.getElementsByClassName("price")[0].innerHTML = 999 * 12
    document.getElementsByClassName("price")[1].innerHTML = 1499 * 12
    document.getElementsByClassName("price")[2].innerHTML = 2999 * 12
    document.getElementsByClassName("priceMonth")[0].innerHTML = "/år"
    document.getElementsByClassName("priceMonth")[1].innerHTML = "/år"
    document.getElementsByClassName("priceMonth")[2].innerHTML = "/år"
    year.style.backgroundColor = "#2D7DB8"
    year.style.color = "#DFF3FD"
    month.style.backgroundColor = "#DFF3FD"
    month.style.color = "#2D7DB8"
}
function changeToMonth() {
    document.getElementsByClassName("price")[0].innerHTML = 999
    document.getElementsByClassName("price")[1].innerHTML = 1499
    document.getElementsByClassName("price")[2].innerHTML = 2999
    document.getElementsByClassName("priceMonth")[0].innerHTML = "/måned"
    document.getElementsByClassName("priceMonth")[1].innerHTML = "/måned"
    document.getElementsByClassName("priceMonth")[2].innerHTML = "/måned" 
    month.style.backgroundColor = "#2D7DB8"
    month.style.color = "#DFF3FD"
    year.style.backgroundColor = "#DFF3FD"
    year.style.color = "#2D7DB8"
}
year.addEventListener("click", changeToYear)
month.addEventListener("click", changeToMonth)

function openNav() {
    document.getElementsByClassName("hiddenNav")[0].style.width = "100%"
}
function closeNav(params) {
    document.getElementsByClassName("hiddenNav")[0].style.width = "0%"
}

document.getElementById("openNav").addEventListener("click", openNav)
document.getElementById("closeNav").addEventListener("click", closeNav)
document.getElementsByClassName("hiddenLink")[1].addEventListener("click", closeNav)
document.getElementsByClassName("hiddenLink")[2].addEventListener("click", closeNav)
