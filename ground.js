class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
            //restitution:2.0
        } 
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        World.add(world, this.body)
       }
       display(){
           rectMode(CENTER)
           rect(this.x,this.y,this.width,this.height)   
        }

   }