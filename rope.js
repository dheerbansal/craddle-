class Rope{
    constructor(x,y,body){

        const options ={
            pointA:{x:x,y:y},
            bodyB: body,
            stiffness: 0.9,
            length: 300
            }
            
                
            
            this.rope = Constraint.create(options);
            World.add(world,this.rope)
        }

        fly(){
            this.rope.bodyB = null;
        }

        display(){
            if(this.rope.bodyB){
            stroke(255);
            const posA = this.rope.pointA;
            const posB = this.rope.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }

}
