class Slingshot {
constructor(a,b){
    var option={
        bodyA:a,
        pointB:b,
        stiffness:0.2,
        length:10,
      
      }
     this.rope=Matter.Constraint.create(option);
     this.pointB=b;
     this.sling1=loadImage("sprites/sling1.png");
     this.sling2=loadImage("sprites/sling2.png");
     this.sling3=loadImage("sprites/sling3.png");
      World.add(world,this.rope);
      

}
fly(){
    this.rope.bodyA=null;
}
attach(body){
this.rope.bodyA=body;
}
display(){
    image(this.sling1,210,35);
    image(this.sling2,180,33);
    if(this.rope.bodyA){

    
    var posa=this.rope.bodyA.position;
   // console.log(posa);
   // var posb=this..pointB.position;
   push();
   strokeWeight(7);
   stroke(49,22,7)
   if(posa.x<220){
    line(posa.x-20,posa.y,this.pointB.x,this.pointB.y);
    line(posa.x-20,posa.y,this.pointB.x+50,this.pointB.y+5);
    image(this.sling3,posa.x-25,posa.y-10,15,30);
   }

   else{
    line(posa.x+20,posa.y,this.pointB.x,this.pointB.y);
    line(posa.x+20,posa.y,this.pointB.x+50,this.pointB.y+5);
    image(this.sling3,posa.x+25,posa.y-10,15,30);
   }
  
    pop();
    }
}
}