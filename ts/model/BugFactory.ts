/// <reference path="../model/Bug.ts" />
/// <reference path="../model/GreenBug.ts" />
module BugEnv {
    export class BugFactory{
        public bugType: any = Bug;

        //todo convert the param to options interface to clean it up
        public createABug(config : any): any{
            //{stage: this.stage, bugNumber: redNum, type: 'red', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0xD41639};
            let bug: any;
            switch(config.type){
                case "red":
                    this.bugType = Bug;
                   // bug = new Bug(stageX, stageY, bubbleHexColor);
                    break;
                case "green":
                    this.bugType = GreenBug;
                  //  bug = new GreenBug(stageX, stageY, bubbleHexColor);
                    break;

            }
            return new this.bugType(config);
        }

    }
}