let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

resetBtn.addEventListener("click", () => {
    location.reload();
})

let turnO =  true //playerX , playerO

const winsPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")


}


boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if(turnO){ //player
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        };   
        box.disabled = true;

        checkWinner();
    });
});


const disabledBoxes = () => {
    for(let box of boxs){
        box.disabled = true;
        };
};

const enabledBoxes = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
        };
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    for( let pattern of winsPatterns) {
        let pos1Val = boxs[pattern[0]].innerText;
        let pos1Va2 = boxs[pattern[1]].innerText;
        let pos1Va3 = boxs[pattern[2]].innerText;

        if(pos1Val != "" && pos1Va2 != "" && pos1Va3 != ""){
            if(pos1Val === pos1Va2 && pos1Va2 === pos1Va3){
                console.log('winner',pos1Val);
                showWinner(pos1Val);
            };
        };

    };  
};


newBtn.addEventListener("click", resetBtn )

resetBtn.addEventListener("click", resetBtn )



