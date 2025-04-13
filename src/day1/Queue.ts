type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node; // added new
        this.tail = node; // pointed to the new
    }
    deque(): T | undefined {
        if (!this.head) {
            this.tail = undefined;
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined; // free memory

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
