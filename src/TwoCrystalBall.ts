export default function TwoCrystalBalls(lists: boolean[]): number {
  const jump = Math.floor(Math.sqrt(lists.length));
  let i = jump;
  for (; i < lists.length; i += jump) {
    if (lists[i]) {
      break;
    }
  }

  i -= jump;

  for (let j = i; j < lists.length; ++j) {
    if (lists[j]) {
      return j;
    }
  }

  return -1;
}
