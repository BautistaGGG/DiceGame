let player1Score = 0
let player2Score = 0
let player1Turn = true
const turnMessage = document.getElementById("message")
const scoreBoard1 = document.getElementById("player1Scoreboard")
const scoreBoard2 = document.getElementById("player2Scoreboard")
const points1 = document.getElementById("player1Dice")
const points2 = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const deciderBtn = document.getElementById("deciderBtn")
const inicioPartida = document.getElementById("inicioPartida")

points2.classList.add("active")

deciderBtn.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*6) + 1
    deciderBtn.textContent = randomNumber
    if (deciderBtn.textContent == 1  || deciderBtn.textContent == 2 || deciderBtn.textContent == 3){   
        inicioPartida.textContent = "El jugador 1 comienza la partida"
        points1.classList.add("active")
        points2.classList.remove("active")
        deciderBtn.disabled = true
        player1Turn = true
    } else {
        deciderBtn.textContent = randomNumber
        deciderBtn.textContent == 4 || deciderBtn.textContent == 5 || deciderBtn.textContent == 6 
        inicioPartida.textContent = "El jugador 2 comienza la partida"
        points1.classList.remove("active")
        points2.classList.add("active")
        deciderBtn.disabled = true
        player1Turn = false
    } 
})

function startGame(){
    const randomNumber = Math.floor(Math.random()*6) + 1
    if (player1Turn) {
        turnMessage.textContent = "Turno del jugador 2"
        points1.textContent = randomNumber 
        scoreBoard1.textContent = player1Score += randomNumber
        points1.classList.remove("active")
        points2.classList.add("active")
        console.log("Jugador1 sacó " + randomNumber);
    } else {
        turnMessage.textContent = "Turno del jugador 1"
        points2.textContent = randomNumber 
        scoreBoard2.textContent = player2Score += randomNumber
        points2.classList.remove("active")
        points1.classList.add("active")
        console.log("Jugador1 sacó " + randomNumber);
    }

    if (player1Score >= 20) {
        turnMessage.textContent = "Jugador 1 ha ganado! 🥳"
        displayButtons()
        finalShadow()
    } else if (player2Score >= 20){
        turnMessage.textContent = "Jugador 2 ha ganado! 🎉"
        displayButtons()
        finalShadow()
    }

    player1Turn = !player1Turn
    
    function displayButtons() {
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
    }

    function finalShadow() {
        points1.classList.add("active")
        points2.classList.add("active")
    }
 }


rollBtn.addEventListener("click", function() {
    startGame()
})

function resetGame() {
    turnMessage.textContent = "¿Quién tira primero?"
    deciderBtn.textContent = "Clickea para saberlo"
    inicioPartida.textContent = ""
     player1Score = 0
     player2Score = 0
     player1Turn = true
     scoreBoard1.textContent = 0
     scoreBoard2.textContent = 0
     points1.textContent = "-"
     points2.textContent = "-"
     resetBtn.style.display = "none"
     rollBtn.style.display = "block"
     points2.classList.add("active")
     points1.classList.add("active")
     deciderBtn.disabled = false

}
resetBtn.addEventListener("click",function(){
    resetGame()
})
 
