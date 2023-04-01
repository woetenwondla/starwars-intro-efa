export class Star{
    static speed = 1;
    static maxSpeed = 10;
    static mainpeed = 10;

    constructor(location, speed, maxSpeed){
        this.location=location;
        this.radius=2+Math.random()*2;
        this.speed=speed;
        this.maxSpeed=maxSpeed;
    }
    update(){
        let center={
            x:window.innerWidth/2,
            y:window.innerHeight/2
        }
        let angle=Math.atan2(
            this.location.y-center.y,
            this.location.x-center.x
        );
        
        this.location.x+=Star.speed*Math.cos(angle);
        this.location.y+=Star.speed*Math.sin(angle);
        
        if(this.location.x>window.innerWidth ||
        this.location.x<0 ||
        this.location.y<0 ||
        this.location.y>window.innerHeight){
            this.location.x=Math.random()*
                            window.innerWidth;
            this.location.y=Math.random()*
                            window.innerHeight;
        }
        
        /*
        X  <- center
        |
        |______ O <- star
        
        
        */
        
        
        let distToCenter = Math.sqrt(
            Math.pow(this.location.x-center.x,2)+
            Math.pow(this.location.y-center.y,2)
        );
        this.radius = 1+3*distToCenter/		
                    window.innerWidth;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.location.x,
                this.location.y);
                
        let center={
            x:window.innerWidth/2,
            y:window.innerHeight/2
        }
        // high speed means lower weight
        // low speed means higher weight
        let weight=80-70*(Star.speed/Star.maxSpeed);
        let pastLocation={
            x:(weight*this.location.x+center.x)/(weight+1),
            y:(weight*this.location.y+center.y)/(weight+1),
        }
        ctx.lineTo(pastLocation.x,
                pastLocation.y);
        ctx.strokeStyle="white";
        ctx.lineWidth=this.radius;
        ctx.stroke();
    }
}