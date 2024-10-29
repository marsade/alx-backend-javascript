export const weakMap = new WeakMap()

export default function queryAPI(obj) {
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 0);
  }
  weakMap.set(obj, weakMap.get(obj) + 1);
  if (weakMap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
