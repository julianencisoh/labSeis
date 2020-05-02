let screens;
let number;
let add;
let sub;
let skip;
let multiply;
let circle;
let backg;
let move;
let error;
let square;
let straight;
let squareArrayOne = [];
let squareArrayTwo = [];
let paint;

function setup(){
createCanvas(500,500);
figtu = new Figura(20,20,20,20);
backg = loadImage("../imagenes/fondo.png");
sub = loadImage("../imagenes/menos.png");
add = loadImage("../imagenes/mas.png");
skip = loadImage("../imagenes/next.png");
multiply = loadImage("../imagenes/por.png");
circle = loadImage("../imagenes/ball.png");
screens = 0;
number = 0;
move = 210;
error = new Errores();
paint == false;
}

function draw(){
background(0);
image(backg,0,0);

switch(screens){
    case 0:
        firstScreen();
    break;

    case 1:
        secondScreen();
     
        for(let i = 0; i < number; i++){
            squareArrayOne[i].pintar();
            squareArrayOne[i].mover();
        }
        for(let v = 0; v < squareArrayTwo.length; v++){
            squareArrayTwo[v].paintBall();
            squareArrayTwo[v].mover();
        }

    break;
}

}

function mousePressed(){
 
    if(mouseX > 298 && mouseX < 374 && mouseY > 248 && mouseY < 324 && screens == 0){
        number+=1;
        squareArrayOne.push(new Cuadro(random(116,480), random(0,230), 35, 3)); 
    }

    if(
        mouseX > 96 && mouseX < 175 && mouseY > 248 && mouseY < 324 && screens == 0){
        number-=1;
        squareArrayOne.pop();
    }

    if(mouseX > 319 && mouseX < 472 && mouseY > 418 && mouseY < 470 && screens == 0){
        if(number > 1 || number < 10){
            screens+=1;    
        }

        if(number < 1 || number > 10){
            error.error();
            screens = 0;
           console.log(screens); 
        }

    }


    if(mouseX > 18 && mouseX < 94 && mouseY > 30 && mouseY < 105){
        
        
        if(number > 0 || number <= 10){
           
            squareArrayOne.push(new Cuadro(random(116,480), random(0,230), 35, 3));
            number+=1;
            
        }

        if(paint == true){
           
        }
        
    }

    if(mouseX > 18 && mouseX < 94 && mouseY > 154 && mouseY < 230){
        number-=1;
        if(number > 0){
            squareArrayOne.pop();
        }
        
    }
 
    if(mouseX > 18 && mouseX < 94 && mouseY > 280 && mouseY < 355){
        squareArrayOne.forEach(duply);
        squareArrayTwo.forEach(duply);
    }

    if(mouseX > 18 && mouseX < 94 && mouseY > 403 && mouseY < 480){
        squareArrayOne.map(circulitos);
    }
}

function firstScreen(){
    image(sub,100,250,75,75);
    image(add,300,250,75,75);
    image(skip, 320, 420, 150, 50);
    fill(255);
    textSize(100);
    text(number,move,320);
    if(number == 10){
    move = 180;
}
    if(number < 10){
    move = 210;
}
    if(number < 0){
    move = 180;
}
}

function secondScreen(){
  
    image(backg,0,0);
        image(add,20,30,75,75);
        image(sub, 20, 155, 75, 75);
        image(multiply, 20, 280, 75, 75);
        image(circle, 20, 405, 75, 75);
        stroke(255);
        line(115, 0, 115, 500);
}

function duply(element,index,array){

    array[index].setTam(array[index].getTam()*2);

}

function circulitos(element, index, array){

    squareArrayTwo.push(new Ball(random(136,480), random(270, 480), 35, 3));
}




