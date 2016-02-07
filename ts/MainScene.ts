/// <reference path="../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="BubbleProcessor.ts" />
/// <reference path="Bubble.ts" />


module bubbleGame {
    export class GameApp {
        public stage:PIXI.Container;
        public renderer:PIXI.SystemRenderer;
        public mainContainer:HTMLCanvasElement;
        public bubbleGame: BubbleGenerator;
        public positionX:number;
        public positionY:number;


        constructor(){
            this.stage = new PIXI.Container();
            this.mainContainer = <HTMLCanvasElement>document.getElementById("maincontainer");
            this.positionX = 800;
            this.positionY = 600;
            this.renderer = PIXI.autoDetectRenderer(this.positionX,this.positionY,{view:this.mainContainer,backgroundColor:0xd7fdde});

            document.body.appendChild(this.renderer.view);

          //  this.testBubble = new Bubble();
          //  console.log(this.testBubble);
          //  this.stage.addChild(this.testBubble.graphics);
            this.bubbleGame = new BubbleGenerator(this.stage, this.positionX, this.positionY);

            requestAnimationFrame( () => this.animate() );



        }

        public animate(){
            // render the stage
            this.renderer.render(this.stage);
            this.bubbleGame.update();
            requestAnimationFrame( () => this.animate() );

        }

    }

}
