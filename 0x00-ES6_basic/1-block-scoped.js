export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var tasknow = true;
    var task2now = false;
  }

  return [task, task2];
}
