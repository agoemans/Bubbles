/// <reference path="../model/BugHandler.ts" />
module BugEnv {
    export class BugContoller {
        public bugHandler: BugHandler;

        constructor() {
            this.bugHandler = new BugHandler();
        }

        //todo change param to interface?
        public createRedBugs( redBugConfig:any ) {
            return this.bugHandler.generateBugList(redBugConfig);
        }

        public createGreenBugs( greenBugConfig: any ) {
            return this.bugHandler.generateBugList(greenBugConfig);
        }
    }
}