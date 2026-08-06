
let boxes = document.querySelectorAll(".box");

let player1 = true;


const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let wld1 = document.querySelector(".wld");

const disa = ()=>
{
    for(let p of boxes)
    {
        p.disabled = true;
    }
}

const anable = ()=>
{
    for(let p of boxes)
    {
        p.disabled = false;
    }
}

let new1 = document.querySelector(".new");

new1.addEventListener("click",()=>
{
    player1 = true;
    anable();
    for(let p of boxes)
    {
        p.innerText = "";
    }

    wld1.innerText = "";

    
});
    
const cheackwin = ()=>
{
    for(let pat of winpat)
    {
        let position1 = boxes[pat[0]].innerText;
        let position2 = boxes[pat[1]].innerText;
        let position3 = boxes[pat[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != "")
        {
            if(position1 === position2 && position2 === position3)
            {
                wld1.innerText = `${position1} is Winner`;
                count = 0;
                disa();
                return 1;
                

            }
        }

        

    }

    return 0;
};

let count = 0;

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(player1)
        {
            box.innerText = "O";
            player1 = false;
        }

        else{
            box.innerText = "X";
            player1 = true;
        }

        box.disabled = true;
        cheackwin();
        count++;

        let x = cheackwin();

        console.log(x);

        if(count == 9)
        {
            if(!x)
            {
                wld1.innerText = "DRAW";
            }
            
            count = 0;
        }

        
        
    });

    
    
});


