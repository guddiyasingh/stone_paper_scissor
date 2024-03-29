let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score")


//Genrate computer choice

const genCompChoice=()=>{
    const options =["rock","paper","scissor"]
   const randIdx = Math.floor(Math.random()*3);
   var target_element = document.getElementById(options[randIdx])
   target_element.style.backgroundColor='#794b20';
   setTimeout( function(){
    target_element.style.backgroundColor='';
   },2000
   );
   return options[randIdx];}

const Drawgame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw. play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userschoice,compchoice)=>{

    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("user win");
        msg.innerText=`You win ${userschoice} beats ${compchoice}!`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("user lose");
        msg.innerText=`You lose! ${compchoice} beats ${userschoice}`;
        msg.style.backgroundColor="red";
    }
}
   const playGame =(userschoice)=>{
const compchoice=genCompChoice();
if(userschoice===compchoice){
//Draw game
Drawgame()}
else {
    let userwin=true;
    if(userschoice==="rock"){
        //secissor or paper
        userwin= compchoice==="paper"?false:true;
    }
    else if (userschoice==="paper"){
       //paper or rock
       userwin=compchoice==="scissor"?false:true;
    }
    else{
        userwin= compchoice==="rock"? false:true;
    }
    showWinner(userwin,userschoice,compchoice);
}
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userschoice = choice.getAttribute("id") 
        console.log("choice was clicked",userschoice);
        playGame(userschoice)
    });
});