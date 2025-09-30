class MyQueue {
    private stackIN: number[] = [];
    private stackOUT: number[] = [];

    push(value: number): void {
        this.stackIN.push(value);
    }

    pop(): number | undefined {
        if (this.empty()) return -1;

        if (this.stackOUT.length === 0) {
            while (this.stackIN.length > 0) {
                this.stackOUT.push(this.stackIN.pop()!);
            }
        }
        return this.stackOUT.pop();
    }

    peek(): number {
        if (this.empty()) return -1;

        if (this.stackOUT.length === 0) {
            while (this.stackIN.length > 0) {
                this.stackOUT.push(this.stackIN.pop()!);
            }
        }
        return this.stackOUT[this.stackOUT.length - 1];
    }

    empty(): boolean {
        return this.stackIN.length === 0 && this.stackOUT.length === 0;
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