export default function LinearSearch(lists: number[], needle: number): boolean {
  for (let i = 0; i < lists.length; ++i) {
    if (lists[i] === needle) return true;
  }
  return false;
}
