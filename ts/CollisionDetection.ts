/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../vendor/typings/gsap/greensock.d.ts" />
/// <reference path="Bubble.ts" />
/// <reference path="BubbleGenerator.ts" />

module bubbleGame {
    export class CollisionDetection {

        constructor() {

        }

        public checkCollide(bubble1:Bubble, bubble2:Bubble){
            var distX = bubble1.graphics.x - bubble2.graphics.x;
            var distY = bubble1.graphics.y - bubble2.graphics.y;
            var dist = Math.sqrt( (distX * distX) + (distY * distY));

            return (dist <= (bubble1.radius + bubble2.radius));
        }



    }
}