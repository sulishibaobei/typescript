/**
 * Created by uidp4983 on 2017/3/1.
 */
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return "Hello,"+this.greeting;
    }
}
let greeter=new Greeter("world");
window.onload=function(){
    document.body.innerHTML=greeter.greet();
}


