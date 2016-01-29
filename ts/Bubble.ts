/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="MainScene.ts" />
/// <reference path="BlueClass.ts" />
/// <reference path="BubbleGenerator.ts" />


module bubbleGame {
    export class Bubble {
        public age:number;
        public hitRate:number;
//        public bubbleColor:string;
        public graphics: PIXI.Graphics;



        constructor(){
            this.age = 0;
            this.hitRate = 0;
            //this.bubbleColor = bubblecolor;
            this.graphics = new PIXI.Graphics();
            this.graphics.x = 20;
            this.graphics.y = 20;
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.beginFill(0xFF3300, 1);
            this.graphics.drawCircle(20,20,20);
            this.graphics.endFill();
        }

        public move(){
            //move

        }

        public collision(){
            // collide with wall or with each other
            // if b + r, decrease health
        }


    }
}
