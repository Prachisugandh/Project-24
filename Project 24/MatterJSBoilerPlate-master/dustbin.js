class Dustbin {
    constructor(x,y,w,h,o){
        
        this.body=Bodies.rectangle(x,y,w,h,o);
        this.w=w;
        this.h=h;
        this.o=o
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h,this.o);

        pop();
    }
}