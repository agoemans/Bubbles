module BugEnv {
    export class StartButton {
        public graphics: PIXI.Graphics;
        public callback:any;

        constructor(callback: void) {
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(4, 0xffd900, 1);
            this.graphics.beginFill(0xFF3300, 1);
            this.graphics.drawRoundedRect(120,80, 300, 100, 15);
            this.graphics.endFill();
            this.graphics.interactive = true;
            this.graphics.on("mousedown", () => this.buttonClicked());
            this.callback = callback;
        }

        private buttonClicked(){
            this.callback(this);
        }
    }
}