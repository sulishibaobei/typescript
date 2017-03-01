/**
 * Created by uidp4983 on 2017/3/1.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
window.onload = function () {
    document.body.innerHTML = greeter.greet();
};
//# sourceMappingURL=greeter.js.map