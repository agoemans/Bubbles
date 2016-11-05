/// <reference path="../controller/CollisionDetection.ts" />
/// <reference path="../model/BugFactory.ts" />
module BugEnv {
    export class BugHandler {
        public bubbleList:Array<Bubble>;
        public stagePosX:number;
        public stagePosY:number;
        public stage:PIXI.Container;
        public collision:CollisionDetection = new CollisionDetection();

        //new
        public bugList:any [] = [];

        //bug stuff
        private bugFactory:BugFactory;


        constructor(stage?:PIXI.Container, stageX?:number, stageY?:number) {
            this.stage = stage;
            this.bubbleList = new Array<Bubble>();

            this.bugFactory = new BugFactory();
            //stage.addChild(this.bubble.graphics);
            this.stagePosX = stageX;
            this.stagePosY = stageY;
        }

        //todo change param to interface properly?
        public generateBugList(config:any):any {
            //{stage: this.stage, bugNumber: redNum, type: 'red', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0xD41639};
            for (let i:number = 0; i < config.bugNumber; i++) {
                let bug:any = this.bugFactory.createABug(config);
                bug.showBug();
                this.bugList.push(bug);
            }
            return this.bugList;
        }


        public moveBugs():void {
            for (var i = 0; i < this.bugList.length; i++) {
                this.bugList[i].update();
            }
        }

        public checkCollision() {
            for (var i = 0; i < this.bugList.length; i++) {
                for (var j = 0; j < this.bugList.length; j++) {
                    //also make sure bubble not hitting itself
                    if (i !== j && !this.bugList[i].hit && !this.bugList[j].hit &&
                        this.collision.checkCollide(this.bugList[i], this.bugList[j])) {

                        this.collide(this.bugList[i], this.bugList[j]);

                        this.collision.deflectBubble(this.bugList[i], this.bugList[j])

                    }
                }
            }
        }

        public collide(bugOne:any, bugTwo:any) {
            if (bugOne.type != bugTwo.type) {
                this.checkHealth(bugOne);
                this.checkHealth(bugTwo);
            }

            if (bugOne.type == bugTwo.type && bugTwo.type == 'green') {
                this.checkPreg(bugOne);
                this.checkPreg(bugTwo);
            }
        }

        private checkHealth(bug):void {
            if (bug == 'green') {
                bug.checkHealth();
            }
        }

        public getDeadBug():any {
            for (let i:number = 0; i < this.bugList.length; i++) {
                return this.checkForDeath(this.bugList[i]);
            }

            //for (let i:number = 0; i < deadlist.length; i++) {
            //    this.bugList[deadlist[i]].die();
            //    this.bugList.splice(deadlist[i]), 1);
            //}
        }


        public checkForDeath(bug:any):any {
            if (bug.type != 'green') {
                return null;
            }

            bug.checkForDeath();

            if (bug.life <= 0) {
                this.bugList.splice(this.bugList.indexOf(bug), 1);
                return bug;
            }
            return null;
        }

        public checkPreg(bug:any) {
            if (this.bubbleList.length > 20) {
                return;
            }

            if (bug.reprodCounter < 5) {
                bug.reprodCounter += 1;
            } else {
                //todo change the option thingy to interface
                let greenOption = {
                    stage: this.stage,
                    bugNumber: 1,
                    type: 'green',
                    stageX: 100,
                    stageY: 100,
                    bubbleHexColor: 0x007CFF
                };
                let bug:any = this.bugFactory.createABug(greenOption);
                bug.showBug();
                this.bugList.push(bug)
            }

        }

        public getNewBug():any {
            for (let i:number = 0; i < this.bugList.length; i++) {
                return this.checkForBirth(this.bugList[i]);
            }
        }


        public checkForBirth(bug:any):any {
            if (bug.type != 'green') {
                return null;
            }

            let bugStatus:boolean = bug.isBirthReady();

            if (bugStatus) {
                let greenOption = {
                    stage: this.stage,
                    bugNumber: 1,
                    type: 'green',
                    stageX: 100,
                    stageY: 100,
                    bubbleHexColor: 0x007CFF
                };
                let newBug:any = this.bugFactory.createABug(greenOption);
                newBug.showBug();
                this.bugList.push(newBug);
                return newBug;
            }

            return null;
        }

        public update() {
            this.moveBugs();

            this.checkCollision()
        }
    }
}