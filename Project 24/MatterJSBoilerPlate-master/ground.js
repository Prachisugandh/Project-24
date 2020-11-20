class Ground{
    constructor (x,y,w,h){
        var groundOption={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,groundOption);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        }

        display(){
            fill("yellow");
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.w,this.h);
        }
}