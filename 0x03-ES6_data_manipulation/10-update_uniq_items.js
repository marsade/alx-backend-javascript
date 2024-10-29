export default function updateUniqueItems(m) {
  if (!(m instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of m.entries()) {
    if (value === 1) {
      m.set(key, 100);
    }
  }
  return m;
}
