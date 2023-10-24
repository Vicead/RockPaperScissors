//! * ------- Selectors ------- */

const selectionArticle=document.querySelector(".selection");


const yourCoiceDiv = document.getElementById("your-choice");
const pcCoiceDiv = document.getElementById("pc-choice");

// Score
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");
const domTopScore = document.getElementById("top-score");

// Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")

//! * ------- Variables ------- */

const userSelectImg = document.createElement("img");
const pcSelectImg=document.createElement("img");
let pcRandom;
let pcArr;
// Message
const messagePar=document.querySelector(".message");
// Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//! * ------- Event Listeners ------- */

selectionArticle.addEventListener("click",(e)=>{
    if(e.target.id){
        userSelectImg.src = `./assets/${e.target.id}.png`;
        userSelectImg.alt = `${e.target.id}`;
        yourCoiceDiv.appendChild(userSelectImg);
        createPcSelection();
    };
});

playAgainButton.addEventListener("click", ()=>{
    modalCardSection.style.display="none"
    window.location.reload()
})

//! * ------- Functions ------- */

const createPcSelection=()=>{
    pcArr=["rock","paper","scissor"]
    pcRandom=pcArr[Math.trunc(Math.random()*3)];
    pcSelectImg.src=`./assets/${pcRandom}.png`;
    pcSelectImg.alt=pcRandom;
    pcCoiceDiv.appendChild(pcSelectImg);
    calcualteResult()
}
const calcualteResult=()=>{
    if(userSelectImg.alt==pcRandom){
        draw()
    }else{
        if(userSelectImg.alt==="rock"){
            pcRandom==="paper"? youLost():youWin()
        }else if(userSelectImg.alt==="scissor"){
            pcRandom==="rock"? youLost():youWin()
        }else if(userSelectImg.alt==="paper"){
            pcRandom==="scissor"? youLost():youWin()
        }
    }
    if(pcScoreSpan.textContent=="10"|| yourScoreSpan.textContent=="10"){
        openModal()
    }
    
}
const draw=()=>{
    messagePar.textContent="It's a draw"
    scoreCardSection.style.color=YELLOW
    messagePar.style.backgroundColor=YELLOW
}
const youLost=()=>{
    messagePar.textContent="You Lost"
    scoreCardSection.style.color=RED
    messagePar.style.backgroundColor=RED
    pcScoreSpan.textContent++
    localStorage.setItem('pcScore', pcScoreSpan.textContent);
    updateTopScore();
}
const youWin=()=>{
    messagePar.textContent="You Win"
    scoreCardSection.style.color=GREEN
    messagePar.style.backgroundColor=GREEN
    yourScoreSpan.textContent++
    localStorage.setItem('yourScore', yourScoreSpan.textContent);
    localStorage.setItem('yourScore', yourScoreSpan.textContent);
}
const openModal=()=>{
    modalCardSection.classList.add("show")
    if(yourScoreSpan.textContent==="10"){
        finalMessagePar.textContent="You Win"
        document.querySelector(".modal").style.backgroundColor=GREEN
        playAgainButton.style.color=GREEN
    }
    else{
        finalMessagePar.textContent="You Lost"
        document.querySelector(".modal").style.backgroundColor=RED
        playAgainButton.style.color=RED
    }
}


// local storage Veri yazma okuma

// localStorage.setItem("high-Score",10)
// let a=localStorage.getItem("high-Score")












//! ilkel

// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")
// rockImg.addEventListener('click', () =>{
//     userSelectImg.src = "./assets/rock.png"
//     userSelectImg.alt = "rock"
//     yourCoiceDiv.appendChild(userSelectImg)
//     // innerHTML
//     // yourCoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
// })
// paperImg.addEventListener('click', () =>{
//     userSelectImg.src = "./assets/paper.png"
//     userSelectImg.alt = "paper"
//     yourCoiceDiv.appendChild(userSelectImg)
// })
// scissorImg.addEventListener('click', () =>{
//     userSelectImg.src = "./assets/scissor.png"
//     userSelectImg.alt = "scissor"
//     yourCoiceDiv.appendChild(userSelectImg)
// })