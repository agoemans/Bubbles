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
    }

}
