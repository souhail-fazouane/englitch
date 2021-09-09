export function randomNumber(start, stop) {
  const rangeLength = stop - start;
  return Math.floor(Math.random() * rangeLength) + start;
}

export function randomSequence(sequence) {
  const result = Array.from(sequence);
  for (let i = 0; i < sequence.length - 1; i++) {
    const j = randomNumber(i, sequence.length);
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

export function randomChoice(collection) {
  const index = randomNumber(0, collection.length);
  return collection[index];
}
