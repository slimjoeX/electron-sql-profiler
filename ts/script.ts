class Test {
    private msg: string;
    constructor(msg: string) {
        this.msg = msg;
    }

    public alert() {
        alert(this.msg);
    }

    public log() {
        console.log(this.msg);
    }
}

const test = new Test("this is a test");
test.log();