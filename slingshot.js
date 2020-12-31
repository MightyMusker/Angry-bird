class Slingshot {
constructor(a,b){
    var option={
        bodyA:a,
        bodyB:b,
        stiffness:0.5,
        length:10,
      
      }
     this.rope=Matter.Constraint.create(option);
      World.add(world,this.rope);
      

}
display(){
    var posa=this.rope.bodyA.position;
    var posb=this.rope.bodyB.position;
    line(posa.x,posa.y,posb.x,posb.y);
}
}