class Ball extends Figura{
    constructor(posX, posY, tam, vel){
        super(posX, posY, tam);
        this.posX = posX;
        this.posY = posY;
        this.tam = tam;
        this.vel = vel;
        this.pintelo = false;
    }

   paintBall(){
        fill(161,0,64);
        ellipse(this.posX,this.posY,this.tam,this.tam);
        
        
    }

    mover(){
        
        this.posX += this.vel;
        if(this. posX > 480 || this.posX < 116){
            this.vel *= -1;
        }

    }

    setTam(tam){
        this.tam = tam;
    }
    
    getTam(){
        return this.tam;
    }
}