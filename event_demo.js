class colorChangeDemo {
    constructor() {
        this.textColorChange = this.textColorChange.bind(this);
        this.colorChangeBtn = document.getElementById("color-change-button");
        this.changeColorText = document.getElementById("color-changing-text");
        this.colorChangeBtn.addEventListener("click",this.textColorChange);
    }
    rangeRNG(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    textColorChange() {
        this.changeColorText.style.color = 'rgb(' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ')';
    }
}

class buttonDemo {
    constructor(btn_id,counter_id) {
        this.button = document.getElementById(btn_id);
        this.text = document.getElementById(counter_id);
        this.count = 0;
    }
    counter() {
        this.count++;
        this.text.textContent = this.count;
    }
    addEvent(callback) {
        this.button.addEventListener("click",callback);
    }
}

class normalDemo extends buttonDemo {
    constructor() {
        super("normal-button","normal-counter");
        this.addEvent(() => this.counter());
    }
}

class throttleDemo extends buttonDemo {
    constructor() {
        super("throttling-button","throttling-counter");
        this.counter = this.counter.bind(this);
        this.addEvent(this.throttle(this.counter,1000));
    }
    throttle(mainFunction, delay) {
        let timerFlag = null;
        return (...args) => {
            if (timerFlag === null) {
                mainFunction(...args);
                timerFlag = setTimeout(() => {
                    timerFlag = null;
                }, delay);
            }
        };
    }
}

class debounceDemo extends buttonDemo {
    constructor() {
        super("debouncing-button","debouncing-counter");
        this.counter = this.counter.bind(this);
        this.addEvent(this.debounce(this.counter,1000))
    }
    debounce(mainFunction, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                mainFunction(...args);
            }, delay);
        };
    };
}

class captureBubbleDemo {
    constructor() {
        this.list = document.getElementById("capture-bubble-list");
    }
    addEvent() {
        this.list.addEventListener("click",(event) => {
            // console.log(event.target.tagName);
            // if (event.target.id == "two") {
            //    alert(event.target.textContent);
            // }
            // else if (event.target.id == "test-test") {
            //     alert("This is a test");
            // }
            if (event.target.className == "odd") {
                alert("Odd number");
            }
            else if (event.target.className == "even") {
                alert("Even Number");
            }
        });
        let one = document.getElementById("one");
        one.addEventListener("click",(event) => {
            alert("More one");
        });
    }
}

let colorChangeClass = new colorChangeDemo();
let normalClass = new normalDemo();
let throttleClass = new throttleDemo();
let debounceClass = new debounceDemo();
let captureBubbleClass = new captureBubbleDemo(); captureBubbleClass.addEvent();

