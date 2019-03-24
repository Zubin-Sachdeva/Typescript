namespace App.Vehicle {
    interface Vehicle {
        numberOfTyres: number;
        engineNumber: string;
        brand: string;
    }
    export class Bike implements Vehicle {
        numberOfTyres: number;
        engineNumber: string;
        brand: string;
        constructor(numberOfTyres: number, engineNumber: string, brand: string) {
            this.brand = brand;
            this.engineNumber = engineNumber;
            this.numberOfTyres = numberOfTyres;
        }

        getBrand(): string {
            return "The brand of the car is: " + this.brand
        }

    }
}