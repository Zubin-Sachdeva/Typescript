/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="./namespace.ts" />

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Student extends Person{
    
    //fields
    id: string;

    //constructor
    constructor (name: string, id: string){
        super(name);
        this.id = id;
    }

    //functions
    getId(){
        console.log(this.id);
    }
    
}

window.onload = () => {
    let a = new Student('Zubin', '05PNG');
    a.getName();
    a.getId();
    var bike: App.Vehicle.Bike = new App.Vehicle.Bike(2, "05PNG", "Honda");
    console.log(bike.getBrand());
};