class Monster{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            density : 1,

        }
            
      this.x = x;
      this.y = y;
      this.r = r;
      
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world,this.body);
    
      this.image = loadImage("monster.jpg");

   }
     display(){
      var pos=this.body.position;
      push()
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r); 
      pop()
    }
}