/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />
/// <reference path="Bubble.ts" />
/// <reference path="CollisionDetection.ts" />
/// <reference path="MainScene.ts" />

module bubbleGame {
    export class BubbleGenerator {
        public bubbleList: Array<Bubble>;
        public stagePosX: number;
        public stagePosY: number;
        public stage:PIXI.Container;
        public collision: CollisionDetection;


        constructor(stage:PIXI.Container, stageX:number, stageY:number) {
            this.stage = stage;
            this.bubbleList = new Array<Bubble>();
            this.collision = new CollisionDetection();
            //stage.addChild(this.bubble.graphics);
            this.stagePosX = stageX;
            this.stagePosY = stageY;
            this.bubbleBirth();

        }

        public bubbleBirth(){
            for (var i=0; i < 10; i++){
                var bubble = new Bubble(this.stagePosX, this.stagePosY);
                this.bubbleList.push(bubble);
                this.stage.addChild(bubble.graphics);

            }
        }

        public update(){
            for (var i=0; i < this.bubbleList.length; i++){
                this.bubbleList[i].update();
            }

            for (var i=0; i < this.bubbleList.length; i++){
                for (var j=0; j < this.bubbleList.length; j++){
                    //also make sure bubble not hitting itself
                    if (i!==j && this.collision.checkCollide(this.bubbleList[i], this.bubbleList[j])){
                        console.log("hit");
                        this.bubbleList[i].hitRate += 1;
                        this.bubbleList[j].hitRate += 1;

                    }
                }
            }
        }


    }
}