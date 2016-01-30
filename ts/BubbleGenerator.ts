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
            for (var i=0; i < 5; i++){
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
                if(this.bubbleList[i].expired == true){
                    // looping through list and shortening list length. Bug
                    // todo- note indexof per expired, have separate function remove from list per indexof
                    this.stage.removeChild(this.bubbleList[i].graphics);
                    this.bubbleList.splice(this.bubbleList.indexOf(this.bubbleList[i]), 1);
                    console.log("remove from list");
                    console.log(this.bubbleList.length);
                }
            }

            for (var i=0; i < this.bubbleList.length; i++){
                for (var j=0; j < this.bubbleList.length; j++){
                    //also make sure bubble not hitting itself
                    if (i!==j &&
                        !this.bubbleList[i].hit &&
                        !this.bubbleList[j].hit &&
                        this.collision.checkCollide(this.bubbleList[i], this.bubbleList[j])){


                        this.bubbleList[i].hit = true;
                        this.bubbleList[j].hit = true;

                        this.bubbleList[i].collision();
                        this.bubbleList[j].collision();
                        this.collision.deflectBubble(this.bubbleList[i], this.bubbleList[j])

                    }
                }
            }
        }


    }
}