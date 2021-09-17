class Snow{
    constructor(x, y,width,height) {
        var options = {
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 250;
        this.height = 250;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.body.x,this.body.y,250,250);
        pop();
      }
}