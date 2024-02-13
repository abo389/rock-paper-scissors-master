const gameOneBtn = document.getElementById( "game-1-btn" );
const gameOne = document.getElementById("game-1")
const gameTwoBtn = document.getElementById( "game-2-btn" );
const gameTwo = document.getElementById("game-2")
const menu = document.querySelector( ".menu" );
const rules = document.querySelectorAll( ".game__rules" );
const rulesBtn = document.querySelectorAll( ".game__footer-rules" );
const backToMenu = document.querySelectorAll(".game__footer-back")
gameOneBtn.addEventListener( "click", () =>
{
  menu.classList.remove( "active" );
  gameTwo.classList.remove( "active" );
  gameOne.classList.add( "active" );
} );
gameTwoBtn.addEventListener( "click", () =>
{
  menu.classList.remove( "active" );
  gameOne.classList.remove( "active" );
  gameTwo.classList.add( "active" );
} );
backToMenu.forEach( back =>
{
  back.addEventListener( "click", () =>
  {
    back.parentElement.parentElement.classList.remove( "active" )
    menu.classList.add("active")
  })
} );
rulesBtn.forEach( btn =>
{
  btn.addEventListener( "click", () =>
  {
    btn.parentElement.nextElementSibling.classList.add("active")
  })
} );
rules.forEach( rule =>
{
  rule.children[ 0 ].addEventListener( "click", () =>
  {
    rule.classList.remove("active")
  } );
  rule.children[ 1 ].children[ 0 ].children[ 1 ].addEventListener( "click", () =>
  {
    rule.classList.remove("active")
  })
})