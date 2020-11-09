class newBox{

    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);

        this.height = height ;
        this.width  = width  ;
    }

    display(){
        var pos = this.body.position ;

        rect(pos.x,pos.y,this.width,this.height);
    }
}