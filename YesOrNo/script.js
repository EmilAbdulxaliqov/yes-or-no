const questions=
["Do you believe in ghosts?",
"Have you ever seen a UFO?",
"Can cats jump six times their length?",
"Do you like chocolate milkshakes?",
"Were you in the swamp yesterday?",
"Did you see Bigfoot?",
"Can you see the moon?",
"Do you know how to swim?",
"Can you play poker?",
"Do you have a twin?"
];
let score=0;
let count=0;
let question=document.querySelector(".question>p");
// question.innerHTML=questions[count];
let userScore=document.querySelector(".score-board>.user-score");
let first=document.querySelector(".first");
let second=document.querySelector(".second");
question.innerHTML=questions[count];
// if (count%2) {
//     second.onclick=()=>{
//         score+=10;
//         userScore.innerHTML=score;
//         let snd2 = new Audio("./game-win.wav"); 
//         snd2.play();
//         count++;
//         question.innerHTML=questions[count];
//         if(count===questions.length-1){
//             count=0;
//         }  
//     }
//     first.onclick=()=>{
//         score-=5;
//         userScore.innerHTML=score;
//         let snd1 = new Audio("./game-over.wav"); 
//         snd1.play();
//         count++;
//         question.innerHTML=questions[count];
//         if(count===questions.length-1){
//             count=0;
//         }  
//     }
// }else{
//     second.onclick=()=>{
//         score-=5;
//         userScore.innerHTML=score;
//         let snd1 = new Audio("./game-over.wav"); 
//         snd1.play();
//         count++;
//         question.innerHTML=questions[count];
//         if(count===questions.length-1){
//             count=0;
//         }  
//     }
//     first.onclick=()=>{
//         score+=10;
//         userScore.innerHTML=score;
//         let snd2 = new Audio("./game-win.wav"); 
//         snd2.play();
//         count++;
//         question.innerHTML=questions[count];
//         if(count===questions.length-1){
//             count=0;
//         }  
//     }
// }
second.onclick=()=>{
    if(count%2){
        score+=10; 
        userScore.innerHTML=score;
        let snd2 = new Audio("./game-win.wav"); 
        snd2.play();
        count++;
        question.innerHTML=questions[count];
        if(count===questions.length-1){
            count=0;
        } 
    }else{
      score-=5; 
      userScore.innerHTML=score;
      let snd1 = new Audio("./game-over.wav"); 
      snd1.play();
      count++;
      question.innerHTML=questions[count];
      if(count===questions.length-1){
          count=0;
      } 
    }
    
    
}
first.onclick=()=>{
    if(count%2){
        score-=5; 
        userScore.innerHTML=score;
        let snd1 = new Audio("./game-over.wav"); 
        snd1.play();
        count++;
        question.innerHTML=questions[count];
        if(count===questions.length-1){
            count=0;
        }  
    }else{
        score+=10;
        userScore.innerHTML=score;
        let snd2 = new Audio("./game-win.wav"); 
        snd2.play();
        count++;
        question.innerHTML=questions[count];
        if(count===questions.length-1){
            count=0;
        }
    }
   
    
}
