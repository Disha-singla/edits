class plinko{
    constructor(x,y,radius){
        var options = {
            restitution : 0.8,
            friction : 0.5,
            density : 0.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=10
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);

    }

    display(){
        ellipseMode(RADIUS);
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}