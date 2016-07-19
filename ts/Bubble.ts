/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="MainScene.ts" />
/// <reference path="BubbleProcessor.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />

module bubbleGame {
    export class Bubble {
        public age:number;
        public hitRate:number;
        public velocity: PIXI.Point;
        public stageX: number;
        public stageY: number;
        public radius: number;
        public circleCentre: PIXI.Point;
        public bubbleColor:string;
        public isFull:number;
        public graphics: PIXI.Graphics;
        public hit:boolean;
        public expired:boolean;

        constructor(stageX:number, stageY:number, color: string, bubbleHexColor:number){
            this.stageX = stageX;
            this.stageY = stageY;
            this.age = 0;
            this.hitRate = 0;
            this.radius = 20;
            this.hit = false;
            this.expired = false;
            this.circleCentre = new PIXI.Point(0,0);
            this.bubbleColor = color;
            this.isFull = 0;
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.beginFill(bubbleHexColor, 1);
            this.graphics.drawCircle(this.circleCentre.x, this.circleCentre.y, this.radius);
            this.graphics.endFill();

            this.graphics.x = Math.random() * this.stageX;
            this.graphics.y = Math.random() * this.stageY;

            //this.velocity = new PIXI.Point(Math.random(), Math.random());
            this.velocity = new PIXI.Point(10  * Math.random(), 10 * Math.random());
        }

        public animateBirth(){
            this.graphics.scale.set(0,0);
            TweenMax.to(this.graphics.scale, 2, {x:1,y:1, ease: Elastic.easeOut});
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

        public collision(other: Bubble){
            // collide with wall or with each other
            // if b + r, decrease health
            if(this.bubbleColor == 'blue' && other.bubbleColor !== this.bubbleColor){
                if (this.hitRate > 5){
                    this.bubbleInitDeath();
                }
                this.hitRate += 1;
                this.hit = true;
            }
        }

        public fill(other:Bubble){
            if (this.bubbleColor == 'blue' && other.bubbleColor == 'blue'){
                if (this.isFull > 5){
                    this.isFull = 0;
                }
                else{
                    this.isFull += 1;
                }
                return !!this.isFull;
            }

            return true;
        }

        private bubbleInitDeath(){
            this.expired = true;
        }

        public animateDeath(){
            TweenMax.to(this.graphics.scale, 1, {x:0,y:0});
        }

        public update(){

            this.hit = false;

            this.move();

            this.graphics.x += this.velocity.x;
            this.graphics.y += this.velocity.y;
        }


    }
}
