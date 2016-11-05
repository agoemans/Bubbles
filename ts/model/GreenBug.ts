/// <reference path="../model/Bug.ts" />
module BugEnv {
    export class GreenBug extends Bug {
        //attrib
        public life:number = 5;
        public injuries:number = 0;

        public bubbleColor:string;
        public hit:boolean = false;
        public reprodCounter:number = 0;

        constructor( config: any ) {
            super(config);
        }

        public decreaseHealth(): void{
            this.injuries += 1;
        }

        public checkHealth(): void{
            if (this.injuries > 5) {
                this.life = 0;
            }
            this.hit = true;
        }

        public checkForDeath(): void{
            if(this.life > 0){
                this.life -= 1;
            } else {
                this.hideBug();
            }
        }

        public isBirthReady(): boolean {
            if(this.reprodCounter >= 5){
                return true;
            }
            return false;
        }

        public resetReprodCounter(): void{
            this.reprodCounter = 0;
        }
    }

}
