const childs = Array.from(document.querySelectorAll(".child")),
    start = document.querySelector(".start"),
    container = document.querySelector(".container"),
    winner = document.querySelector(".winner .player"),
    reset = document.querySelector(".btn .reset"),
    choose = Array.from(document.querySelectorAll(".choose"));

    let char;

    let continu = 1;

    choose.forEach(element => 

        element.addEventListener("click", () =>{ 
            char = element.innerHTML;
            start.style.display = "none"
            container.style.display = "block"
    })
);

childs.forEach((element, i) => 

    element.addEventListener("click", info =>{
        
        if(element.innerHTML == "" && continu == 1){

            element.innerHTML = char;

            win(0, 1, 2);
            win(3, 4, 5);
            win(6, 7, 8);
            win(0, 3, 6);
            win(1, 4, 7);
            win(2, 5, 8);
            win(0, 4, 8);
            win(2, 4, 6);

            if(char == 'X' && continu == 1){

                char = 'O';
                element.style.color = "blue";

            }else if(char == 'O' && continu == 1){

                char = 'X';
                element.style.color = "red";
            } 
        }
    })
);

reset.addEventListener("click", resetAll);

function win(a, b, c){

    if((childs[a].innerHTML == childs[b].innerHTML && childs[b].innerHTML == childs[c].innerHTML && childs[c].innerHTML != "") ){

        continu = 0;

        winner.innerHTML = char;

        childs[a].style.background = "rgb(5, 189, 5)"; childs[a].style.color = "white";
        childs[b].style.background = "rgb(5, 189, 5)"; childs[b].style.color = "white";
        childs[c].style.background = "rgb(5, 189, 5)"; childs[c].style.color = "white";
    }
}

function resetAll(){

    childs.forEach((element, i) => {
        
        element.innerHTML = "";
        element.style.background = "";
    });
    continu = 1;
    winner.innerHTML = "";
    start.style.display = "flex";
    container.style.display = "none";
}