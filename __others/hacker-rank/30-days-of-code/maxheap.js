
class Heap {
    items = [];


    constructor(values){

        if(values && values.length) {

            values.forEach(value => this.add(value));

        }

    }



    get size() {

        return this.items.length;

    }



    add(item) {

        this.items[this.size] = item;

        this.bubbleUp();

    }



    poll() {

        if(!this.size) return null;

        const item = this.items[0];

        this.items[0] = this.items[this.size - 1];

        this.items.pop();

        this.bubbleDown();

        return item;

    }



    swap(index1, index2) {

        const temp = this.items[index1];

        this.items[index1] = this.items[index2];

        this.items[index2] = temp;

    }



    parentIndex(index) {

        return Math.floor((index - 1) / 2);

    }



    leftChildIndex(index) {

        return index * 2 + 1;

    }



    rightChildrenIndex(index) {

        return index * 2 + 2;

    }



    parent(index) {

        return this.items[this.parentIndex(index)];

    }



    leftChild(index) {

       return this.items[this.leftChildIndex(index)];

    }



    rightChild(index) {

        return this.items[this.rightChildrenIndex(index)];

    }



    peek(item) {

        return this.items[0];

    }

}



class MinHeap extends Heap {



    bubbleDown() {

        let index = 0;

        while (this.leftChild(index) !== undefined && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {

            let smallerIndex = this.leftChildIndex(index);

            if (this.rightChild(index) !== undefined  && this.rightChild(index) < this.items[smallerIndex]) {

                smallerIndex = this.rightChildrenIndex(index);

            }

            this.swap(smallerIndex, index);

            index = smallerIndex;

        }

    }



    bubbleUp() {

        let index = this.size - 1;

        while (this.parent(index) !== undefined && this.parent(index) > this.items[index]) {

            this.swap(this.parentIndex(index), index);

            index = this.parentIndex(index);

        }

    }

}



class MaxHeap extends Heap {



    bubbleDown() {

        let index = 0;

        while (this.leftChild(index) !== undefined && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])) {

            let biggerIndex = this.leftChildIndex(index);

            if (this.rightChild(index) !== undefined && this.rightChild(index) > this.items[biggerIndex]) {

                biggerIndex = this.rightChildrenIndex(index);

            }

            this.swap(biggerIndex, index);

            index = biggerIndex;

        }

    }



    bubbleUp() {

        let index = this.size - 1;

        while (this.parent(index) !== undefined && this.parent(index) < this.items[index]) {

            this.swap(this.parentIndex(index), index);

            index = this.parentIndex(index);

        }

    }

}



class MedianHeap {



    minHeap = new MinHeap();

    maxHeap = new MaxHeap();



    add(value) {

        if (value > this.median) {

            this.minHeap.add(value);

        } else {

            this.maxHeap.add(value);

        }



        // Re-balancing

        if (this.minHeap.size - this.maxHeap.size > 1) {

            this.maxHeap.add(this.minHeap.poll());

        }



        if (this.maxHeap.size - this.minHeap.size > 1) {

            this.minHeap.add(this.maxHeap.poll());

        }

    }



    get median() {

        if (this.minHeap.size === 0 && this.maxHeap.size === 0) {

            return Number.NEGATIVE_INFINITY;

        } else if (this.minHeap.size === this.maxHeap.size) {

            return (this.minHeap.peek() + this.maxHeap.peek()) / 2;

        } else if (this.minHeap.size > this.maxHeap.size) {

            return this.minHeap.peek();

        } else {

            return this.maxHeap.peek();

        }

    }

}
