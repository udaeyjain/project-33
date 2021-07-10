class Snow{
constructor(x,y,width,height){
var options={
restitution:0.5,
friction:0.8,
density:1
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("snow5.webp");
World.add(world,this.body);
}

updateY(){
if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,800),y:0})

}

}

display(){
rectMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);


}

}