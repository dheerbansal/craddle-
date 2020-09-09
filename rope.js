class Rope{
    constructor(bodyA, bodyB, offsetX,offsetY){
        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        
        var options= {
            bodyA:this.body,
            bodyB:bodyB,
            length: 400,
            stiffness:0.9
         }
         var constraint = Constraint.create(options);
           World.add(world,constraint)
    }

   
    


    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position
        strokeWeight(4);
        line(ball1.x,ball1.y,ground.x,ground.y)
    }
    }

