export default function BinarySearch(lists: number[], target: number): boolean {
  let low = 0;
  let high = lists.length;

  while (low < high) {
    const midPos = Math.floor(low + (high - low) / 2);
    const value = lists[midPos];

    if (target === value) return true;
    else if (target < value) high = midPos;
    else low = midPos + 1;
  }

  return false;
}
