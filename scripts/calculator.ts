/// <reference path="../node_modules/@types/jquery/index.d.ts" />

window.onload = () => {
    var calc = new Calculator('x', 'y', 'output');
}

class Calculator {
    x: HTMLInputElement;
    y: HTMLInputElement;
    output: HTMLSpanElement;
    constructor(xId: string, yId: string, OutputId: string) {
        this.x = <HTMLInputElement> document.getElementById(xId);
        this.y = <HTMLInputElement> document.getElementById(yId);
        this.output = <HTMLSpanElement> document.getElementById(OutputId);
        this.wireEvents();
    }

    wireEvents() {
        var addButton = document.getElementById('add');
        if(addButton){
            addButton.addEventListener('click', () => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
        }
        var subButton = document.getElementById('subtract');
        if(subButton){
            subButton.addEventListener('click', () => {
                this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
        }
    }

    add(a: number, b: number) {
        return (a + b);
    }
    subtract(a: number, b: number) {
        return a - b;
    }

}

// window.onload = () => {
//     var calc = new Calculator('x', 'y', 'output');
// }

// class Calculator {
//     x: JQuery;
//     y: JQuery;
//     output: JQuery;
//     constructor(xId: string, yId: string, OutputId: string) {
//         this.x = $("#" + xId);
//         this.y = $("#" + yId);
//         this.output = $("#" + OutputId);
//         this.wireEvents();
//     }

//     wireEvents() {
//         var addButton = $("#" + 'add');
//         var xVal: string = this.x.val();
//         var yVal: string = this.y.val();
//         if(addButton){
//             addButton.click(event => {
//                 this.output.html(this.add(parseInt(xVal), parseInt(yVal)).toString());
//             });
//         }
//         var subButton = $("#" + 'subtract');
//         if(subButton){
//             subButton.click(event => {
//                 this.output.html(this.subtract(parseInt(xVal), parseInt(yVal)).toString());
//             });
//         }
//     }

//     add(a: number, b: number) {
//         return (a + b);
//     }
//     subtract(a: number, b: number) {
//         return a - b;
//     }

// }