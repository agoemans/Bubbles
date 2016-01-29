/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />
/// <reference path="Bubble.ts" />
/// <reference path="BlueClass.ts" />
/// <reference path="MainScene.ts" />

module bubbleGame {
    export class BubbleGenerator {
        public bubble: Bubble;
        public stagePosX: number;
        public stagePosY: number;
        public dummyX: number;
        public dummyY: number;


        constructor(stage:PIXI.Container, stageX:number, stageY:number) {
            this.bubble = new Bubble;
            stage.addChild(this.bubble.graphics);
            this.stagePosX = stageX;
            this.stagePosY = stageY;
            this.dummyX = 20;
            this.dummyY = 40;


        }

        public move(){
            //console.log(this.bubble.graphics.y);
            // while (this.bubble.graphics.y < 500){
            if (this.dummyY < this.stagePosY ){
                TweenMax.to(this.bubble.graphics.moveTo(this.bubble.graphics.x, this.bubble.graphics.y),0.3,{x: 400, y:this.dummyY} );
                this.dummyY *= 20;
            }
            else {
                TweenMax.to(this.bubble.graphics.moveTo(this.bubble.graphics.x, this.bubble.graphics.y),0.3,{x: 400, y:this.dummyY} );
                this.dummyY -= 20;
            }


            //this.bubble.graphics.moveTo(this.bubble.graphics.x, this.bubble.graphics.y);


            /*if (this.bubble.graphics.y > 0 ){
             this.bubble.graphics.y = this.bubble.graphics.y * 2;
             console.log("more than zero loop" + this.bubble.graphics.y);
             }*/
            /* if (this.bubble.graphics.y > this.stagePosY){
             this.bubble.graphics.y = this.bubble.graphics.y / 2;
             console.log("more than max y loop" + this.bubble.graphics.y);
             }*/

            //  }
        }


    }
}