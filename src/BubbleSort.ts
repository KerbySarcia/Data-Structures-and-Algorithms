export default function BubbleSort(lists: number[]): number[] {
  const sorted_array = lists;

  for (let i = 0; i < lists.length; ++i) {
    for (let j = 0; j < lists.length - 1 - i; ++j) {
      if (sorted_array[j] > sorted_array[j + 1]) {
        const temp = sorted_array[j];
        sorted_array[j] = sorted_array[j + 1];
        sorted_array[j + 1] = temp;
      }
    }
  }

  return sorted_array;
}
