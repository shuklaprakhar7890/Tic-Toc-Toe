let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let mes = document.querySelector("#mesBtn");
let mesContainer = document.querySelector(".mesContainer");
let newBtn = document.querySelector("#New-btn");

let turn0 = true;

let winPattern = [
    [0,1,2],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turn0)
        {
            box.innerText = "o";
            turn0 = false;
        }
        else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })  
});
const disabledBoxes = () => {
    for(box of boxes)
    {
        box.disabled = true;
    }
};
 
 const showWinner = (winner) => {
    mes.innerText = `Congratulations! Winner is ${winner}`;
    mesContainer.classList.remove("hide");
    disabledBoxes();
 };

 const checkWinner = () =>{
    for(pattern of winPattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
 }
 
