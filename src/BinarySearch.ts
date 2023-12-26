export default function BinarySearch(lists: number[], needle: number): boolean {
  let low = 0;
  let high = lists.length;
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const value = lists[mid];

    if (value === needle) return true;
    else if (needle < value) high = mid;
    else low = mid + 1;
  }
  return false;
}
