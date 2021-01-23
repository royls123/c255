class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,restitution:0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image=loadImage("paper.png")
        this.radius= radius;
        
       

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        
        
       
        imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        
        pop();
      }
}