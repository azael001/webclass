//toggle

const toggle=document.getElementById('toggle')
const toggleicon=document.getElementById("toggle-icon")
const menu=document.getElementById('menu')
let showMenu=false

toggle.addEventListener('click', toggleMenu)


function toggleMenu(){
    if(!showMenu){
        toggleicon.src='./images/icon-close.svg'
        showMenu=true
    }
    else {
        toggleicon.src='./image/icon-hambuerguer.svg'
        showMenu=false
    }
}

//slideshow
let cardIndex=0;
const cards=document.getElementsByClassName('card');
console.log(cards)
const dots=document.getElementsByClassName('dots');
console.log(dots)
showCards(cardIndex)



function currentCard(n){
    showCards=(n)
    cardIndex=n
}
function nextCard(cardIndex){

}
function showCards(n){
    console.log(n)
    console.log(cardIndex)
    dots[cardIndex].classList.remove('active')
    cards[cardIndex].classList.remove('active-card')
    cards[n].classList.add('active-card')
    dots[n].classList.add('active')
}
setInterval(nextCard, 1000)