type SNode<T> = {
  value: T;
  next?: SNode<T>;
  prev?: SNode<T>;
};

export default class Stack<T> {
  private head?: SNode<T>;
  private tail?: SNode<T>;
  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  peek(): T | undefined {
    return this.tail?.value;
  }

  enqueue(item: T): void {
    const node: SNode<T> = { value: item };
    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this.length--;

    const tail = this.tail;
    this.tail = tail.prev;

    if (this.length === 0) {
      this.head = undefined;
    }

    return tail.value;
  }
}
