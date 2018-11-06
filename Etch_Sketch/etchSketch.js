




const grid = document.querySelector(".grid");
let x=16;
draw (x);
const reset = document.querySelector(".btn")
reset.addEventListener('click',()=>{
    clear(x);
     x = prompt ("Enter Grid Dimensions");
     draw(x);
     
}
);



function draw( x){

let sq = x*x;

let y="";

let r = 960/x;
let str= r.toString();
let f_str = str +"px ";

for (let i=0;i<x; i++){
    
    y+= f_str;
}
grid.style.cssText = " display:inline-grid; background: white; padding:10px; grid-gap: 2px 2px;";
grid.style.gridTemplateColumns = y;
grid.style.gridTemplateRows =y;

for (let i=0; i< sq; i++){
const square = document.createElement("div");
square.style.cssText = " border: 1px solid black;   ";
grid.appendChild(square);

square.addEventListener ('mouseover', () => {
    
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    

    let r_str = red.toString();
    let b_str = blue.toString();
    let g_str = green.toString();
    let f_str = "rgb(" +r_str+","+g_str+","+b_str+")";

    square.style.backgroundColor = f_str;
    
    
    
});
}

}

function clear(x){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

}




