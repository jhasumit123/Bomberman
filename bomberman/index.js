const random = [];
let points = 0;
randomFunc();
function createGrid() {
        for(let i=1;i<=81;i++){
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "cell_"+i);
            newDiv.className = "grid";
            newDiv.addEventListener("click", checkGrid);
            document.getElementById("container").appendChild(newDiv);  
        }
}
createGrid();
function checkGrid(event){
    var clickedCell = event.target;
    var cellID = Number(clickedCell.getAttribute("id").slice(5));
    if(!random.includes(cellID)){
        document.getElementById("cell_"+cellID).style.backgroundColor = "green";
        document.getElementById("gameScore").innerHTML = ++points;
    }
    else{
        showBomb();
        document.getElementById("resultDisplay").innerHTML = "game over";
        document.getElementById("resultDisplay").style.color = "red";    
        document.querySelectorAll(".grid").forEach((cell) => cell.removeEventListener("click", checkGrid) );
    }
    if(points == 71){
        document.getElementById("resultDisplay").innerHTML = "win";
        document.getElementById("resultDisplay").style.color = "green";
        showBomb();
    }
    clickedCell.removeEventListener("click", checkGrid);
}
function resetAll(){
    for(var i = 1 ; i <= 81 ; i++){
        document.getElementById("cell_"+i).remove();
    }
        while(random.length>0){
        random.pop();
    }
    points = 0;
    document.getElementById("resultDisplay").innerHTML = "";
    document.getElementById("gameScore").innerHTML = "";
    randomFunc();
    createGrid();
}
function randomFunc() {
    while(random.length < 10){
        var num = Math.floor(Math.random()*81)+1;
        if(!random.includes(num))
            random.push(num);
    }
    console.log(random);
}
function showBomb(){
    for(var i = 0 ; i < 10 ; i++){
         document.getElementById("cell_"+random[i]).style.backgroundImage = 'url("https://img.icons8.com/emoji/48/000000/bomb-emoji.png")';
        document.getElementById("cell_"+random[i]).style.backgroundColor = "red";
    }        
}