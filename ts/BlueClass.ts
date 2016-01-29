/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="Bubble.ts" />

module bubbleGame {
    export class BlueClass extends Bubble{
        public fertility:number;

        constructor(){
            super();

        }

        public ifAttacked(){
            //check collide with other player
            // if collide with red player, increase hitRate
            this.hitRate += 1 ;
        }

        public createOtherBubbles(){
            //increase fertility,
            if (this.fertility == 5) {
                this.fertility = 0;
            }
            this.fertility += 1;
        }


    }
}
