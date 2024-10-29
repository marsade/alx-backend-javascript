export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const arr = [];
  set.forEach((element) => {
    if (element.includes(startString)) {
      arr.push(element.substring(startString.length, element.length));
    }
  });
  return arr.join('-');
}
