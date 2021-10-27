var p1=0;
var p2=0;
p2mane = prompt('Enter your name');

document.querySelector(".b1").innerHTML = "Start";
function game(){

    var RandomNumber1 = Math.floor(Math.random()*6) + 1;
    var RandomNumber2 = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").setAttribute("src","images/dice"+RandomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+RandomNumber2+".png");
    if(RandomNumber1 === RandomNumber2){
    }
    else if(RandomNumber2 > RandomNumber1){
        p2++;
    }
    else{
        p1++;
    }
    document.querySelector(".p1").innerHTML = p1;
    document.querySelector(".p2").innerHTML = p2;
    document.querySelector(".b1").innerHTML = "Next";
}


document.querySelector(".b1").addEventListener("click",function(){
    document.querySelector(".img1").hidden = false;
    document.querySelector(".img2").hidden = false;
    document.querySelector(".b2").hidden=false;
    document.getElementsByClassName("score")[0].style.visibility = "hidden";
    document.getElementsByClassName("score")[1].style.visibility = "hidden";
    game();
})
document.querySelector(".b2").addEventListener("click",function(){
    document.querySelector(".img1").hidden = true;
    document.querySelector(".img2").hidden = true;
    document.querySelector(".b2").hidden=true;
    document.getElementsByClassName("score")[0].style.visibility = "visible";
    document.getElementsByClassName("score")[1].style.visibility = "visible";
    if(p1 > p2){
        document.querySelector("h1").innerHTML = "Rishabh wins";

    }
    else if(p2>p1)
    {
        document.querySelector("h1").innerHTML = p2name + " Wins";

    }
    else{
        document.querySelector("h1").innerHTML = "Draw";

    }
p1=0;
p2=0;
})
