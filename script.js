const gameOneBtn = document.getElementById( "game-1-btn" );
const gameOne = document.getElementById("game-1")
const gameTwoBtn = document.getElementById( "game-2-btn" );
const gameTwo = document.getElementById("game-2")
const menu = document.querySelector( ".menu" );
const rules = document.querySelectorAll( ".game__rules" );
const rulesBtn = document.querySelectorAll( ".game__footer-rules" );
const backToMenu = document.querySelectorAll( ".game__footer-back" )
const playAgain = document.querySelectorAll( ".again" );
const icons = document.querySelector( ".game__icons" );
const iconsArr = document.querySelectorAll(".game__icon")
const cards = document.querySelector( ".game__cards" );
const cardsArr = document.querySelectorAll(".game__card")
window.onload = function()
{
  const score1 = document.querySelectorAll(".game__score-num")[0]
  const score2 = document.querySelectorAll(".game__score-num")[1]
  localStorage.score1 ? "" : localStorage.setItem( "score1", "12" )
  localStorage.score2 ? "" : localStorage.setItem( "score2", "12" )
  score1.innerHTML = localStorage.score1
  score2.innerHTML = localStorage.score2
}
playAgain.forEach( e =>
{
  e.addEventListener( "click", () =>
  {
    let container = e.parentElement.parentElement
    container.classList.remove("step-2");
    container.classList.remove( "step-4" );
    let Allc = [...container.children] 
    Allc.forEach( icon =>
    {
      let n = document.querySelector( ".game.active" ).id.slice( -1 ) - 1;
      document.querySelectorAll(".count")[n].innerHTML = "3"
      icon.hasAttribute( "style" ) ? icon.removeAttribute( "style" ) : "";
      icon.classList.contains( "yourPicked" ) ? icon.classList.remove( "yourPicked" ) : "";
      icon.classList.contains( "housePicked" ) ? icon.classList.remove( "housePicked" ) : "";
    })
  })
})
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
} );
function howWin (p1, p2,gameNum)
{
  const result = document.querySelectorAll("#result")[gameNum]
  const score1 = document.querySelectorAll(".game__score-num")[0]
  const score2 = document.querySelectorAll(".game__score-num")[1]
  const game = {
    "paper": {
      "beats": {"rock":"", "spock":""},
      "lose": {"scissors":"", "lizard":""}
    },
    "scissors": {
      "beats": {"paper":"", "lizard":""},
      "lose": {"spock":"", "rock":""}
    },
    "spock": {
      "beats": {"scissors":"", "rock":""},
      "lose": {"lizard":"", "paper":""}
    },
    "lizard": {
      "beats": {"spock":"", "paper":""},
      "lose": {"rock":"", "scissors":""}
    },
    "rock": {
      "beats": {"lizard":"", "scissors":""},
      "lose": {"spock":"", "paper":""}
    }
  }
  if ( game[ p1 ].beats[ p2 ] == "" && gameNum == 0)
  {
    result.innerHTML = "win"
    localStorage.score1++
    score1.innerHTML = localStorage.score1
  } else if ( game[ p1 ].beats[ p2 ] == "" && gameNum == 1 )
  {
    result.innerHTML = "win"
    localStorage.score2++
    score2.innerHTML = localStorage.score2
  }
  if ( game[ p1 ].lose[ p2 ] == "" && gameNum == 0 )
  {
    result.innerHTML = "lose"
    localStorage.score1--
    score1.innerHTML = localStorage.score1
  } else if ( game[ p1 ].lose[ p2 ] == "" && gameNum == 1 )
  {
    result.innerHTML = "lose"
    localStorage.score2--
    score2.innerHTML = localStorage.score2
  }
}
iconsArr.forEach( (icon) =>
{
  icon.addEventListener( "click", () =>
  {
    icons.classList.add("step-2")
    icon.classList.add( "yourPicked" )
    let int = setInterval( () =>
    {
      let num = document.querySelector(".count")
      num.innerHTML--
      if ( num.innerHTML == "0" )
      {
        clearInterval( int )
        for ( let i = 0; i < iconsArr.length; i++ )
        {
          if ( iconsArr[ i ].classList.length == 1 )
          {
            iconsArr[i].classList.add("housePicked")
            iconsArr[i].style.display = "flex"
            iconsArr[i].style.order = "3"
            iconsArr[0].style.display = "none"
            break;
          }
        }
        icons.classList.add( "step-4" )
        let housePicked = document.querySelector(".housePicked").id.slice(0, -2)
        let yourPicked = document.querySelector( ".yourPicked" ).id.slice( 0, -2 )
        let n = document.querySelector( ".game.active" ).id.slice( -1 ) - 1;
        console.log(n)
        howWin(yourPicked, housePicked, n)
      }
    }, 1000)
  } )
} );
cardsArr.forEach( (card) =>
{
  card.addEventListener( "click", () =>
  {
    cards.classList.add("step-2")
    card.classList.add( "yourPicked" )
    let int = setInterval( () =>
    {
      let num = document.querySelectorAll(".count")[1]
      num.innerHTML--
      if ( num.innerHTML == "0" )
      {
        clearInterval( int )
        cards.classList.add( "step-4" )
        var notPicked = []
        cardsArr.forEach( c =>
          {
            if ( c.classList.length == 1 ) notPicked.push( c )
          } )
        let rad = Math.floor( Math.random() * 5 )
        console.log(rad)
        notPicked[ rad ].classList.add( "housePicked" )
        notPicked[ rad ].style.display = "flex"
        notPicked[ rad ].style.order = "3"
        let t = document.querySelector(".game__cards .game__step-2")
        t.style.display = "none"
        let housePicked = document.querySelector(".housePicked").id
        let yourPicked = document.querySelector( ".yourPicked" ).id
        let n = document.querySelector( ".game.active" ).id.slice( -1 ) - 1;
        howWin(yourPicked, housePicked, n)
      }
    }, 1000)
  } )
} );

// howWin("paper", "rock", 1)