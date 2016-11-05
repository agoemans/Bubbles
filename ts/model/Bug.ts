module BugEnv {
    export class Bug {
        //attrib
        public age:number = 0;
        public life:number = 5;
        public injuries:number = 0;
        public velocity:PIXI.Point = new PIXI.Point(10 * Math.random(), 10 * Math.random());
        public circleCentre:PIXI.Point = new PIXI.Point(0, 0);
        public radius:number = 10;
        public type:string;
        public hit:boolean = false;
        public reprodCounter:number = 0;
        private bubbleHexColor: any;

        //external
        public stage: any;
        public stageX:number;
        public stageY:number;
        public graphics:PIXI.Graphics;

        constructor(config: any) {
            ////{stage: this.stage, bugNumber: redNum, type: 'red', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0xD41639};

            this.stageX = config.stageX;
            this.stageY = config.stageY;

            this.bubbleHexColor = config.bubbleHexColor;
            this.type = config.type;

            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.beginFill(this.bubbleHexColor, 1);
            this.graphics.drawCircle(this.circleCentre.x, this.circleCentre.y, this.radius);
            this.graphics.endFill();

            this.graphics.x = Math.random() * this.stageX;
            this.graphics.y = Math.random() * this.stageY;

        }

        public showBug(){
            this.graphics.scale.set(0,0);
            TweenMax.to(this.graphics.scale, 2, {x:1,y:1, ease: Elastic.easeOut});
        }

        public hideBug(){
            TweenMax.to(this.graphics.scale, 1, {x:0,y:0});
        }

        public move(){
            if (this.graphics.y > this.stageY || this.graphics.y < 0) {
                //this.graphics.y -= 80;
                this.velocity.y = -this.velocity.y;
            }

            if (this.graphics.x > this.stageX || this.graphics.x < 0) {
                //this.graphics.x -= this.velocity.x;
                this.velocity.x = -this.velocity.x;
            }

        }

        public update(){
            this.hit = false;

            this.move();

            this.graphics.x += this.velocity.x;
            this.graphics.y += this.velocity.y;
        }

    }

}
