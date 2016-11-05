module BugEnv {
    export class CollisionDetection {
        //todo rename bubble to bug

        constructor() {

        }

        public checkCollide(bubble1:Bubble, bubble2:Bubble){
            var distX = bubble1.graphics.x - bubble2.graphics.x;
            var distY = bubble1.graphics.y - bubble2.graphics.y;
            var dist = Math.sqrt( (distX * distX) + (distY * distY));

            return (dist <= (bubble1.radius + bubble2.radius));
        }


        public calcDist(point:PIXI.Point){
            return Math.sqrt( (point.x * point.x) + (point.y * point.y));
        }

        public deflectBubble(bubble1:Bubble, bubble2:Bubble){
            var bubble1Exit = new PIXI.Point(bubble1.graphics.x - bubble2.graphics.x, bubble1.graphics.y - bubble2.graphics.y);
            var bubble2Exit = new PIXI.Point(bubble2.graphics.x - bubble1.graphics.x, bubble2.graphics.y - bubble1.graphics.y);

            var speed1 = this.calcDist(bubble1.velocity);
            var speed2 = this.calcDist(bubble2.velocity);

            bubble1Exit.x = bubble1Exit.x/(bubble1.radius+bubble2.radius)*speed1;
            bubble1Exit.y = bubble1Exit.y/(bubble1.radius+bubble2.radius)*speed1;

            bubble2Exit.x = bubble2Exit.x/(bubble1.radius+bubble2.radius)*speed2;
            bubble2Exit.y = bubble2Exit.y/(bubble1.radius+bubble2.radius)*speed2;

            bubble1.velocity.x = bubble1Exit.x;
            bubble2.velocity.x = bubble2Exit.x;

            bubble1.velocity.y = bubble1Exit.y;
            bubble2.velocity.y = bubble2Exit.y;

        }

    }
}