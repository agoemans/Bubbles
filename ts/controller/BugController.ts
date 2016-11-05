/// <reference path="../model/BugHandler.ts" />
module BugEnv {
    export class BugContoller {
        public bugHandler: BugHandler;
        public stage: any;

        constructor(stage: any) {
            this.bugHandler = new BugHandler();
            this.stage = stage;
        }

        //todo change param to interface?
        public createRedBugs( redBugConfig:any ): any {
            return this.bugHandler.generateBugList(redBugConfig);
        }

        public createGreenBugs( greenBugConfig: any ): any {
            return this.bugHandler.generateBugList(greenBugConfig);
        }

        public removeDeadBugs(): void {
            let deadBug: any = this.bugHandler.getDeadBug();
            if(deadBug != null){
                this.stage.removeChild(deadBug.graphics);
            }
        }

        public addNewBugs(): void {
            let newBug: any = this.bugHandler.getNewBug();
            if(newBug != null){
                this.stage.addChild(newBug.graphics);
            }
        }

        public update() {
           this.bugHandler.update();
          // this.removeDeadBugs();
           this.addNewBugs();
        }
    }
}