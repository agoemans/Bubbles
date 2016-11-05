/// <reference path="../../vendor/typings/pixi.js/pixi.js.d.ts" />
/// <reference path="../controller/BugController.ts" />
module BugEnv {
    export class EcoSystem {
        public stage:PIXI.Container;
        public renderer:PIXI.SystemRenderer;
        public mainContainer:HTMLCanvasElement;
        public bubbleGame:BubbleGenerator;
        public positionX:number;
        public positionY:number;

        public bugController: BugContoller = new BugContoller();


        constructor() {
            this.stage = new PIXI.Container();
            this.mainContainer = <HTMLCanvasElement>document.getElementById("maincontainer");
            this.positionX = 800;
            this.positionY = 600;
            this.renderer = PIXI.autoDetectRenderer(this.positionX, this.positionY, {
                view: this.mainContainer,
                backgroundColor: 0xd7fdde
            });

            document.body.appendChild(this.renderer.view);

         //   this.bubbleGame = new BubbleGenerator(this.stage, this.positionX, this.positionY);

            this.drawBugs(5, 6);

            requestAnimationFrame(() => this.animate());
        }

        public animate() {
            // render the stage
            this.renderer.render(this.stage);
            //todo move this to a controller
           // this.bubbleGame.update();
            requestAnimationFrame(() => this.animate());

        }

        public drawBugs(redNum: number, greenNum: number) {
            let redOptions: any = {stage: this.stage, bugNumber: redNum, type: 'red', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0xD41639};
            //0x007CFF
            this.bugController.createRedBugs(redOptions);

            let greenOptions: any = {stage: this.stage, bugNumber: greenNum, type: 'green', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0x007CFF};
            //0x007CFF
            this.bugController.createGreenBugs(greenOptions);

        }

    }

}
