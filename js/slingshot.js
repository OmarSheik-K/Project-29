class slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:1
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    attach(body){
        this.slingshot.bodyA = body;
    }
    
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            push();

           strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);

            pop();
        }
    }
    
}