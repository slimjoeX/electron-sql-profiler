"use strict";
var Test = /** @class */ (function () {
    function Test(msg) {
        this.msg = msg;
    }
    Test.prototype.alert = function () {
        alert(this.msg);
    };
    Test.prototype.log = function () {
        console.log(this.msg);
    };
    return Test;
}());
var test = new Test("this is a test");
test.log();
