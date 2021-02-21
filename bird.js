class Bird extends Base{
    constructor(x,y,width,height){
        super(x,y,width,height);

        this.image=loadImage("sprites/bird.png");
        this.smokeimage=loadImage("sprites/smoke.png")
        this.trijectory=[]
    }
    display(){
        super.display();
        //this.body.position.x=mouseX;
        //this.body.position.y=mouseY;
        if(this.body.position.x>220&&this.body.velocity.x>10){
        var position=[this.body.position.x,this.body.position.y];
        this.trijectory.push(position)}
       // console.log(this.trijectory);
       for(var i=0; i<this.trijectory.length;i++){
           image(this.smokeimage,this.trijectory[i][0],this.trijectory[i][1])
       }
    }
}







