/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="MainScene.ts" />
/// <reference path="BubbleGenerator.ts" />


module bubbleGame {
    export class Bubble {
        public age:number;
        public hitRate:number;
        public velocity: PIXI.Point;
        public stageX: number;
        public stageY: number;
        public radius: number;
        public circleCentre: PIXI.Point;
//        public bubbleColor:string;
        public graphics: PIXI.Graphics;



        constructor(stageX:number, stageY:number){
            this.stageX = stageX;
            this.stageY = stageY;
            this.age = 0;
            this.hitRate = 0;
            this.radius = 20;
            this.circleCentre = new PIXI.Point(0,0);
            //this.bubbleColor = bubblecolor;
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.beginFill(0xFF3300 * Math.random(), 1);
            this.graphics.drawCircle(this.circleCentre.x, this.circleCentre.y, this.radius);
            this.graphics.endFill();

            this.graphics.x = Math.random() * this.stageX;
            this.graphics.y = Math.random() * this.stageY;

            //this.velocity = new PIXI.Point(Math.random(), Math.random());
            this.velocity = new PIXI.Point(10  * Math.random(), 10 * Math.random());


        }

        public move(){
            //move

            if (this.graphics.y > this.stageY || this.graphics.y < 0) {
                //this.graphics.y -= 80;
                this.velocity.y = -this.velocity.y;

            }

            if (this.graphics.x > this.stageX || this.graphics.x < 0) {
                //this.graphics.x -= this.velocity.x;
                this.velocity.x = -this.velocity.x;
            }

        }

        public collision(){

            // collide with wall or with each other
            // if b + r, decrease health
        }

        public update(){
            this.move();

            this.graphics.x += this.velocity.x;
            this.graphics.y += this.velocity.y;
        }


    }
}
