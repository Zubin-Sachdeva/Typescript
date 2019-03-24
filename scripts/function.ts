module func {

    class rectangle {
        width: number;
        height: number;

        constructor (width: number, height: number){
            this.height = height;
            this.width = width;
        }

        getArea() : number {
            return this.width * this.height;
        }
    }

    var a = function getPerimeter(x: rectangle) {
        return 2 * (x.height + x.width);
    }

    var b = (x: rectangle) => {
        return 2 * (x.height + x.width);
    }

    var circleArea: (circle: { radius: number; }) => void;
    circleArea = (circle) => {
        console.log(2 * 3.14 * circle.radius);
    }

    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log("Hello, " + (name || 'stranger'));
    }


    window.onload = () => {
        var z = new rectangle(10, 20);
        console.log(z.getArea());
        a(z);
        console.log(b(z));
        helloWorld();
        helloWorld('Zubin');
        var c = { radius: 5 };
        circleArea(c);
    }
}