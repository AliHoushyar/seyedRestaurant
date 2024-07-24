var foodImages = document.querySelectorAll('.foodImage')
var infoTitles = document.querySelectorAll('.infoTitle')
var prices = document.querySelectorAll('.price')
var materials = document.querySelectorAll('.material')
var dess = document.querySelectorAll('.des')

let j = 0
let max = 3;
foodImages[j].classList.add("active")
infoTitles[j].classList.add("active")
prices[j].classList.add("active")
materials[j].classList.add("active")
dess[j].classList.add("active")

function Prev() {
    if(j!==max){
        foodImages[j].classList.remove("active")
        infoTitles[j].classList.remove("active")
        prices[j].classList.remove("active")
        materials[j].classList.remove("active")
        dess[j].classList.remove("active")
        j+=1
        foodImages[j].classList.add("active")
        infoTitles[j].classList.add("active")
        prices[j].classList.add("active")
        materials[j].classList.add("active")
        dess[j].classList.add("active")
    }
}

function Next() {
    if(j!==0){
        foodImages[j].classList.remove("active")
        infoTitles[j].classList.remove("active")
        prices[j].classList.remove("active")
        materials[j].classList.remove("active")
        dess[j].classList.remove("active")
        j-=1
        foodImages[j].classList.add("active")
        infoTitles[j].classList.add("active")
        prices[j].classList.add("active")
        materials[j].classList.add("active")
        dess[j].classList.add("active")
    }
}