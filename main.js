status="";
img="";

function preload(){
    img = loadImage('basket of fruits.jpg')
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw( ){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("grapes",45,75);
    nofill();
    stroke("#FF0000");
    rect(30,60,450,350);
}