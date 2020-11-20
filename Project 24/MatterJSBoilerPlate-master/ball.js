class Ball {
    constructor(x,y,w,h){
       
        
        this.body=Bodies.circle(x,y,w,h);
        this.w=w;
        this.h=h
         World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0,0,this.w,this.h);

        pop();
    }
}