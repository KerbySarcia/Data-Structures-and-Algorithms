type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

export default class Queue<T> {
  private head?: QNode<T>;
  private tail?: QNode<T>;
  private length: number;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  enqueue(item: T): void {
    const node: QNode<T> = { value: item };
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = head.next;

    return head.value;
  }
}
