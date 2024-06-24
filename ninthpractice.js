let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX,playerO

//let arr=["apple","banana","litchi"];

//2D array
//let arr2=[["apple","litchi"] ,["potato","mushroom"], ["pants","shirts"]];
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
];

const resetGame=() =>{
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO===true){ //playerO
            box.innerText="O";
            turnO=false;
        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner) => {
    msg.innerText=`Congragulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw=(winner) => {
    msg.innerText=`Sorry,It's a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

 const checkWinner=()=>{
    let hasWinner = false;
    for(let pattern of winPatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);   
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val=== pos2Val && pos2Val === pos3Val){
                //console.log("winner",pos1Val);

                showWinner(pos1Val);
                hasWinner = true;
                break;
        }
       }
 }

 if (!hasWinner) {
    let allBoxesFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allBoxesFilled = false;
            break;
        }
    }

    if (allBoxesFilled) {
        showDraw();
    }
}
};

 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);

 
