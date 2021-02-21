class Base {
    constructor(x,y,width,height,angle) {
        var option={
            restitution:0.5,
            density:2,
            friction:2
        }
        this.body =  Bodies.rectangle(x,y,width,height,option); 
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/base.png");
        World.add(world, this.body);  
    }
    
    display(){
    
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        fill ("brown");
        //rectMode(CENTER);
        //rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
    
    
    
    
    }