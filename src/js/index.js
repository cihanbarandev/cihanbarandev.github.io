import '../sass/main.scss';
import Animation from './animation';

// test class
class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    testMethod() {}
}

var animation = new Animation('test', 'res');

var test = new Test('test1', 'test2');

function Test2(a, b) {
    this.a = a;
    this.b = b;
}

Test2.prototype.testMethod = function () {};

var test2 = new Test2('test1', 'test2');