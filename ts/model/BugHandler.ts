/// <reference path="../controller/CollisionDetection.ts" />
/// <reference path="../model/BugFactory.ts" />
module BugEnv {
    export class BugHandler {
        public bubbleList: Array<Bubble>;
        public stagePosX: number;
        public stagePosY: number;
        public stage:PIXI.Container;
        public collision: CollisionDetection;

        //new
        public numberOfBugs: number;
        public redBugList: any[] = [];
        public greenBugList: any [] = [];

        //bug stuff
        private bugFactory: BugFactory;


        constructor(stage?:PIXI.Container, stageX?:number, stageY?:number) {
            this.stage = stage;
            this.bubbleList = new Array<Bubble>();
            this.collision = new CollisionDetection();

            this.bugFactory = new BugFactory();
            //stage.addChild(this.bubble.graphics);
            this.stagePosX = stageX;
            this.stagePosY = stageY;
        }

        //todo change param to interface properly?
        public generateBugList(config : any): any{
            //{stage: this.stage, bugNumber: redNum, type: 'red', stageX:this.positionX, stageY:this.positionY, bubbleHexColor:0xD41639};
            let bugList: any[] = [];
            for(let i: number = 0; i < config.bugNumber; i++){
                let bug: any = this.bugFactory.createABug(config);
                bug.showBug();
                bugList.push(bug);
            }
            this.assignToInternBugList(config.type, bugList);
            return bugList;
        }

        public assignToInternBugList(type: string, bugList: any[]): void{
            switch(type){
                case "red":
                    this.redBugList = bugList;
                    break;
                case "green":
                    this.greenBugList = bugList;
                    break;
            }
        }

        //todo
        public bubbleDeath(){
            for (var i=0; i < this.bubbleList.length; i++){
                if(this.bubbleList[i].expired == true){
                    // looping through list and shortening list length. BugEnv
                    // todo- note indexof per expired, have separate function remove from list per indexof
                    this.bubbleList[i].animateDeath();
                    this.stage.removeChild(this.bubbleList[i].graphics);
                    this.bubbleList.splice(this.bubbleList.indexOf(this.bubbleList[i]), 1);
                    //console.log("remove from list");
                    //console.log(this.bubbleList.length);
                }
            }
        }

        public checkCollision(){
            for (var i=0; i < this.bubbleList.length; i++){
                for (var j=0; j < this.bubbleList.length; j++){
                    //also make sure bubble not hitting itself
                    if (i!==j &&
                        !this.bubbleList[i].hit &&
                        !this.bubbleList[j].hit &&
                        this.collision.checkCollide(this.bubbleList[i], this.bubbleList[j])){

                        //todo move into bubble collision method
                        //    this.bubbleList[i].hit = true;
                        //    this.bubbleList[j].hit = true;

                        this.bubbleList[i].collision(this.bubbleList[j]);
                        this.bubbleList[j].collision(this.bubbleList[i]);
                        this.fill(this.bubbleList[i], this.bubbleList[j]);


                        this.collision.deflectBubble(this.bubbleList[i], this.bubbleList[j])

                    }
                }
            }
        }

        public fill (bubble1:Bubble, bubble2:Bubble){
            // checks if blue bubble is full, if yes, create new bubble
            if(bubble1.fill(bubble2) == false || bubble2.fill(bubble1)== false){
                if(this.bubbleList.length < 20 ) {
                    //this.bubbleBirth('blue');
                }
            }

        }

        public update(){
            for (var i=0; i < this.bubbleList.length; i++){
                this.bubbleList[i].update();
            }

            this.bubbleDeath();
            this.checkCollision()
        }
    }
}