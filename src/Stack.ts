type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

export default class Stack<T> {
  private head?: SNode<T>;
  private length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = head.prev;

    return head.value;
  }

  push(item: T): void {
    const node: SNode<T> = { value: item };
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
