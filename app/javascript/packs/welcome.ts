import * as $ from "jquery";

class HelloWorld {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    static print() {
        $(`div.hello h1`).append("<br />NOT HELLO");
    }
}

HelloWorld.print();
