class MyQueue {
    private stackIN: number[];
    private stackOUT: number[];

    constructor() {
        this.stackIN = [];
        this.stackOUT = [];
    }
 
    push(x: number): void {
        while(this.stackIN.length > 0) {
            this.stackOUT.push(this.stackIN.pop())
        }

        this.stackIN.push(x);

        while(this.stackOUT.length) {
            this.stackIN.push(this.stackOUT.pop());
        }
    }

    pop(): number {
        return this.stackIN.pop() ?? -1;
    }

    peek(): number {
        return this.stackIN.at(-1) ?? -1;
    }

    empty(): boolean {
        return this.stackIN.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */