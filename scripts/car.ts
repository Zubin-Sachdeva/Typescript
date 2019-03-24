// The definite assignment assertion is a feature that allows a ! to be placed after instance 
// property and variable declarations to relay to TypeScript that a variable is indeed assigned 
// for all intents and purposes, even if TypeScript’s analyses cannot detect so.

class Engine {
    constructor( public horsePower: number, public engineType: string) {}
}

class Car {
    private _engine!: Engine;
    
    constructor( engine: Engine) {
        this.engine = engine;
    }

    public get engine(): Engine {
        return this._engine;
    }
    public set engine(value: Engine) {
        this._engine = value;
    }

    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }

}

window.onload = () => {
    var eng = new Engine(250, 'V8');
    var c = new Car(eng);
    c.startEngine();
    c.stopEngine();
}