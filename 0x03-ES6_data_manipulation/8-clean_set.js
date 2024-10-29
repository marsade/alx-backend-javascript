export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const arr = [];
  set.forEach((element) => {
    if (typeof element === 'string' && element.includes(startString)) {
      arr.push(element.substring(startString.length, element.length));
    }
  });
  return arr.join('-');
}
