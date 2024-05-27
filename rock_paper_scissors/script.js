let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const user_score = document.querySelector("#user-score")
const comp_score = document.querySelector("#comp-score")

const drawGame=()=>{
    console.log("game was draw")
    msg.innerText="Game was Draw.Play Again"
    msg.style.backgroundColor="black"

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        user_score.innerText=userScore
        msg.innerText=`You Win!. your${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="Green"
    }
    else{
        compScore++
        comp_score.innerText=compScore
        msg.innerText=`You lose!! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"

    }
}

const genCompChoice=()=>{
    const option =["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random() * 3)
    return option[randIdx]
}

const playGame=(userChoice)=>{
        console.log("user choice =", userChoice)
        //generate computer choice
        const compChoice= genCompChoice()
        console.log("comp choice =", compChoice)
        if(userChoice===compChoice){
            //draw game
            drawGame()
        }
        else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "scissors";
            } else if (userChoice === "paper") {
                userWin = compChoice === "rock";
            } else if (userChoice === "scissors") {
                userWin = compChoice === "paper";
            }
            showWinner(userWin,userChoice,compChoice);
        }
    }

choices.forEach((choice)=>{ //from all choice we are fetching individual choices
    const userChoice=choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        
        playGame(userChoice)
    })
})
