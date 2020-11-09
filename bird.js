class bird{

    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height);
        Matter.World.add(world,this.body);

    }
}